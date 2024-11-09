import React, { useEffect, useState } from 'react';
import { TileLayer, MapContainer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import osm from "../osm_provider"
import 'leaflet/dist/leaflet.css';

// Custom divIcon for the current location marker
const currentLocationIcon = L.divIcon({
  className: 'custom-marker',
  html: '<div class="circle-marker"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10], // Center the marker
  popupAnchor: [0, -10],
});

// Routing component to handle adding route between two points
function Routing({ currentPosition, selectedPosition }) {
  const map = useMap(); // Use the existing map instance from react-leaflet

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
          addWaypoints: false, // Disable the ability to add new waypoints
        },
        createMarker: () => null, // Disable markers for waypoints
        routeWhileDragging: false, // Disable dragging of waypoints
        draggableWaypoints: false, // Make the waypoints not draggable
        fitSelectedRoutes: true, // Fit the map to the route
        show: false, // Do not show the routing instructions

        // Prevent default routing instruction container
        router: L.Routing.osrmv1({ showAlternatives: false }),
      }).on('routesfound', (e) => {
        // Remove any existing instructions
        map.getContainer().querySelectorAll('.leaflet-routing-container').forEach((el) => el.remove());
      }).addTo(map);

      return () => {
        map.removeControl(routingControl); // Cleanup on unmount or when positions change
      };
    }
  }, [map, currentPosition, selectedPosition]);

  return null;
}



export default function MapComponent() {
  const [center, setCenter] = useState({ lat: 28.6139, lng: 77.209 }); // Default center
  const [currentPosition, setCurrentPosition] = useState(null); // User's current position
  const zoomLevel = 12;

  // Static position for selected marker (example: India Gate in New Delhi)
  const selectedPosition = [28.613048441502126, 77.2296412002021];

  // Get user's current location
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

  return (
    <div className='max-w-[100vw] max-h-[100vh] z-0'>
      <MapContainer center={center} zoom={zoomLevel} className="h-[100vh] w-[100vw] z-0">
        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />

        {/* Selected marker (static) */}
        <Marker position={selectedPosition}>
          <Popup>Selected Location: India Gate</Popup>
        </Marker>

        {/* User's current location marker */}
        {currentPosition && (
          <Marker position={currentPosition} icon={currentLocationIcon}>
            <Popup>You are here</Popup>
          </Marker>
        )}

        {/* Routing: Add route between current location and selected location */}
        {currentPosition && (
          <Routing currentPosition={currentPosition} selectedPosition={selectedPosition} />
        )}
      </MapContainer>
    </div>
  );
}
