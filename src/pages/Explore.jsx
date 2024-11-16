import { useState,useEffect } from "react";
import MapComponent from "../components/MapComponent.jsx";
import CategoryList from "../components/ExploereComponent/CategoryList.jsx";
import SearchBar from "../components/ExploereComponent/SearchBar.jsx"
import { useSelector,useDispatch } from 'react-redux';
import Modal from "../components/Modal.jsx"
import ReviewList from "../components/ReviewComponent/ReviewList.jsx";
import { usePlaceReviews } from "../Custom Hooks/usePlaceReviews.js";
import LocationCard from "../components/ExploereComponent/LocationCard.jsx";
import useUserData from "../Custom Hooks/useUserData"
import { useUser } from "@clerk/clerk-react";
import Star from "../components/ReviewComponent/Star.jsx";
import {uploadImagesToFirebase} from "../Service/firebase"
import { toast } from "react-toastify";

export default function Explore() {
  const handlePlaceSelect = (coordinates) => {
    // Add marker to the selected place
  };
  const { user } = useUser();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (user && user.id) {
      setUserId(user.id); // Set the user ID when the user is available
    }
  }, [user]);

  const { data: userData } = useUserData(userId);

  const [reviewText, setReviewText] = useState("");
  const [visitType, setVisitType] = useState("");
  const [waitTime, setWaitTime] = useState("");
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(0);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...imageUrls]);
  };

  const handleImageRemove = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const [category, setCategory] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const place= useSelector((state) => state.search.selectedPosition);

  const { data: reviews, isLoading, error } = usePlaceReviews(place?.id);

  const handleSubmitReview = async () => {
    if (!userData?.id) {
      toast.error("please login to post the review !!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

   
    const imageUrls = await uploadImagesToFirebase(images);

   
    const reviewData = {
      rating,
      comment: reviewText,
      userId: userData.id, 
      placeId: place.id,
      images: imageUrls,
      visitType,
      waitTime,
    };

    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/review/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          'API-Key':`${import.meta.env.VITE_VALID_API_KEYS}`
         },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        toast.error("Failed to submit review", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        throw new Error('Failed to submit review');
      }

      const data = await response.json();
      console.log('Review submitted:', data);
      toast.success("Review Posted successfully ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setReviewText("");
      setVisitType("");
      setWaitTime("");
      setImages([]);
      setRating(0);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    }
  };

  return (
    <>
      <div
        className="grid 
    grid-cols-1
    md:grid-cols-4  h-[87vh] w-[100%]  text-black "
      >
        <div className="p-3 absolute z-10 w-[35%]">
          <SearchBar onPlaceSelect={handlePlaceSelect} />
          <CategoryList onCategoryChange={(value) => setCategory(value)} />
            <LocationCard place={place} setIsModalOpen={setIsModalOpen}/>
        </div>
        <div className="col-span-4 overflow-hidden">
          <MapComponent />
          <div className='md:absolute mx-2 w-[90%] md:w-[63%]
           bottom-36 relative md:bottom-3 right-0'>
          {isLoading ? (
              <p>Loading reviews...</p>
            ) : error ? (
              <p>Error loading reviews</p>
            ) : (
              <ReviewList reviews={reviews} />
            )}
          
          
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-auto  ">
      <div className="flex items-center space-x-3 mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
        <p className="font-medium text-black">{userData?.email || "UserName"}</p>
          <p className="text-gray-500 text-xs">Visited & Reviewed</p>
        </div>
      </div>
      <h2 className="text-center text-lg font-semibold mb-4 text-black">
        {place.name}
      </h2>
      <textarea
        placeholder="Share details of your experience at this place"
        className="w-full bg-white-800 text-gray-300 rounded-lg p-3 mb-4 outline-none resize-none h-24 placeholder-gray-500"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />

<div className="flex space-x-2 mb-4 justify-center">
            {[1, 2, 3,4,5].map((star) => (
              <Star
                key={star}
                selected={rating >= star}
                onClick={() => setRating(star)} 
              />
            ))}
          </div>

      <div className="w-full bg-black rounded-lg py-2 mb-4 flex flex-col items-center">
        <label
          htmlFor="upload"
          className="text-white font-medium cursor-pointer flex items-center"
        >
          Add photos
        </label>
        <input
          id="upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {images.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-16 h-16">
              <img
                src={image}
                alt="Preview"
                className="w-full h-full object-cover rounded"
              />
              <button
                onClick={() => handleImageRemove(index)}
                className="absolute top-0 right-0 bg-gray-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-bold text-sm mb-2 text-black">
          When did you visit?
        </h3>
        <div className="flex space-x-2">
          {["Weekday", "Weekend", "Public holiday"].map((type) => (
            <button
              key={type}
              onClick={() => setVisitType(type)}
              className={`px-3 py-1 rounded-full text-sm ${
                visitType === type
                  ? "bg-white text-black  border border-black"
                  : "bg-gray-700 text-gray-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold text-sm mb-2 text-black">
          How long did you wait to enter?
        </h3>
        <div className="flex space-x-2">
          {["No wait", "Up to 10 min", "10–30 min", "30–60 min"].map((time) => (
            <button
              key={time}
              onClick={() => setWaitTime(time)}
              className={`px-3 py-1 rounded-full text-sm ${
                waitTime === time
                  ? "bg-white text-black border border-black"
                  : "bg-gray-700 text-gray-400"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="text-gray-400 hover:text-gray-200">Cancel</button>
        <button
          className="bg-white text-black font-semibold px-4 py-2 rounded-lg"
          onClick={handleSubmitReview} 
          disabled={!reviewText || rating === 0}
        >
          Post
        </button>
      </div>
    </div>
      </Modal>
    </>
  );
}
