import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlace } from "../../store/imageSlice";
import React from "react";

const LocationCard = ({place,setIsModalOpen}) => {
  const dispatch=useDispatch();
  const Navigate=useNavigate();
  const redirectToGoogleMaps = (place) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank'); 
  };

  const handleImageRoute=(place)=>{
dispatch(setPlace(place));
console.log(place)
Navigate('/ImagePage')
  }
  return (
    <div className="max-w-xl bg-white rounded-lg shadow-lg p-4 flex space-x-4">
      <img
        src={place.perImage}
        alt={place.name}
        className="w-[140px] h-[240px] rounded-lg"
      />
      <div className="flex flex-col w-[100%]">
        <div className="flex justify-between items-start">
          <h2 className="text-lg text-black font-semibold">{place.name}</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 21L12 17L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500 w-2/3 mt-1 line-clamp-2">
        {place.address}
        </p>
        <p className="text-sm text-gray-700 mt-2 line-clamp-4">
        {place.description}
        </p>
        <div className="flex items-center mt-4">
          <button   onClick={() => redirectToGoogleMaps(place)} className="flex items-center gap-2 text-orange-500 text-sm mr-4">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.87494 7.30912L13.7499 1.32886L8.12494 13.9539L6.87494 8.63807L1.87494 7.30912Z"
                stroke="#FF9500"
                stroke-width="1.32895"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            Direction
          </button>
          <span className="flex items-center gap-2 text-gray-400 text-sm mr-4">
            <svg
              width="18"
              height="20"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.75 11.3026V4.65789H8.25C8.74728 4.65789 9.22419 4.86792 9.57583 5.24175C9.92746 5.61559 10.125 6.12263 10.125 6.65132C10.125 7.18 9.92746 7.68704 9.57583 8.06088C9.22419 8.43472 8.74728 8.64474 8.25 8.64474H5.75M3.25 2H12C12.6904 2 13.25 2.59499 13.25 3.32895V12.6316C13.25 13.3655 12.6904 13.9605 12 13.9605H3.25C2.55964 13.9605 2 13.3655 2 12.6316V3.32895C2 2.59499 2.55964 2 3.25 2Z"
                stroke="gray"
                stroke-width="1.32895"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            No Parking
          </span>
        </div>
        <div className="mt-4 flex gap-2 item-center">
          <Button color="gray" className="colo" onClick={() => setIsModalOpen(true)}>
            Add Review
          </Button>
          <span className="text-gray-500 text-sm mt-3" onClick={()=>handleImageRoute(place)}>Images</span>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
