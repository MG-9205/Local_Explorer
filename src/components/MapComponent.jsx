import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { TileLayer, MapContainer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import osm from "../Service/osm_provider"
import 'leaflet/dist/leaflet.css';
import { setSelectedPosition } from '../store/searchSlice';


const currentLocationIcon = L.divIcon({
  className: 'custom-marker',
  html: '<div class="circle-marker"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10],
});


function Routing({ currentPosition, selectedPosition }) {
  const map = useMap(); 

  useEffect(() => {
    if (!map) return;

    if (currentPosition && selectedPosition) {
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(currentPosition.lat, currentPosition.lng),
          L.latLng(selectedPosition[0], selectedPosition[1]),
        ],
        lineOptions: {
          styles: [{ color: 'blue', weight: 4 }],
          addWaypoints: false, 
        },
        createMarker: () => null, 
        routeWhileDragging: false, 
        draggableWaypoints: false, 
        fitSelectedRoutes: true, 
        show: false, 

       
        router: L.Routing.osrmv1({ showAlternatives: false }),
      }).on('routesfound', (e) => {
        
        map.getContainer().querySelectorAll('.leaflet-routing-container').forEach((el) => el.remove());
      }).addTo(map);

      return () => {
        map.removeControl(routingControl); 
      };
    }
  }, [map, currentPosition, selectedPosition]);

  return null;
}



export default function MapComponent() {
  const dispatch = useDispatch();
  const [center, setCenter] = useState({ lat: 28.6139, lng: 77.209 });
  const searchResults = useSelector((state) => state.search.results);
  const Results = useSelector((state) => state.search.selectedPosition);
  const [currentPosition, setCurrentPosition] = useState(null); 
  const zoomLevel = 9;


  const selectedPosition = [28.613048441502126, 77.2296412002021];


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user's location: ", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const redirectToGoogleMaps = (place) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank'); 
  };

  return (
    <div className='max-w-[100vw] max-h-[100vh] z-0'>
      <MapContainer center={center} zoom={zoomLevel} className="h-[100vh] w-[100vw] z-0">
        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />

     
        {searchResults.map((place) => (
          <Marker
            key={place.id} 
            position={[place.latitude, place.longitude]}
            eventHandlers={{
              click: () => {
                dispatch(setSelectedPosition(place));
                console.log("Selected Position:", place);
              },
            }}
          >
             <Popup>
              <div className="flex flex-col">
                {/* Image of the place */}
                {place.perImage && (
                  <img
                    src={place.perImage}
                    alt={place.name}
                    className="w-full h-32 object-cover rounded-md mb-1"
                  />
                )}

               
                <h4 className="font-bold text-lg">{place.name}</h4>

                

               
                <button
                  onClick={() => redirectToGoogleMaps(place)}
                  className="mt-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Get Directions
                </button>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* User's current location marker */}
        {currentPosition && (
          <Marker position={currentPosition} icon={currentLocationIcon}>
            <Popup>You are here</Popup>
          </Marker>
        )}

        {/* Routing: Add route between current location and selected location 
        {currentPosition && (
          <Routing currentPosition={currentPosition} selectedPosition={selectedPosition} />
        )}*/}
      </MapContainer>
    </div>
  );
}
