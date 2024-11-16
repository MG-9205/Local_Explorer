import React, { useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



const useCurrentLocationIcon = () => useMemo(() => {
  return L.divIcon({
    className: 'custom-marker',
    html: '<div class="circle-marker"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  });
}, []);

export default function MarkerComponent({ position, isCurrentLocation, popupText }) {
  
  const icon = isCurrentLocation ? useCurrentLocationIcon() : undefined;

 
  if (!position) return null;

  return (
    <Marker position={position} icon={icon}>
      <Popup>{popupText}</Popup>
    </Marker>
  );
}
