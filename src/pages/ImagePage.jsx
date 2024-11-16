import React, { useEffect, useState } from "react";
import imageService from "../Service/imageService";
import { useDispatch, useSelector } from "react-redux";

const ImagePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImages] = useState([]);
  const dispatch = useDispatch();
  const Place = useSelector((state) => state.image.Place);

  useEffect(() => {
    const fetchImages = async () => {
      if (!Place) {
        // If Place is empty, fetch all images
        const data = await imageService.getAllImage();
        setImages(data);
      } else {
        console.log(Place)
        const data = await imageService.getImageByPlaceName(Place.name); 
        setImages(data);
      }
    };

    fetchImages();
  }, [Place]);



  // Filter images based on search query, category, and rating
  /*const filteredImages = image.filter((image) => {
    return (
      (image.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory ? image.category === selectedCategory : true) &&
      (selectedRating ? image.rating >= selectedRating : true)
    );
  });*/

  // Function to open modal with the clicked image
  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  const handleSearch = async () => {
    if (searchQuery.trim()) {
      const data = await imageService.getImageByPlaceName(searchQuery);
      setImages(data);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between mb-6">
        {/* Search Bar */}
        <div className="w-full md:w-[100%] mr-2">
          <input
            type="text"
            placeholder="Search for locations..."
            className="w-full p-3 text-black border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        {/* Filters */}
        <div className="flex space-x-4">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 border text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="Categories">All Categories</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Monuments">Monuments</option>
            <option value="Hotels">Hotels</option>
            <option value="Cafe">Cafe</option>
            <option value="Instiutions">Instiutions</option>
            <option value="Stations">Stations</option>
          </select>
          {/* Rating Filter */}
        
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {image.length > 0 ? (
         image.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image.url}
                alt="image"
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
                style={{ height: "300px" }}
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4 w-full">
                <p className="text-sm">{image.place.name}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-white text-center text-lg font-semibold text-gray-500">
            No images found.
          </div>
        )}
      </div>

      {/* Modal for displaying large image */}
      {modalOpen && selectedImage && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-4xl w-full p-6 bg-hidden rounded-lg shadow-lg">
            <button
              className="absolute mt-10 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full text-2xl text-black flex justify-center items-center font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.place.name}
              className="w-full h-auto rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold text-center">
              {selectedImage.place.name}
            </h3>
            <p className="text-center text-sm">{selectedImage.place.name}</p>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePage;
