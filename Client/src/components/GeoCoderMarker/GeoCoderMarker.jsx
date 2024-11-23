import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Custom Icon for the marker
const CustomIcon = L.icon({
  iconUrl: "https://img.icons8.com/?size=100&id=52671&format=png&color=000000",
  iconSize: [30, 30],    // Adjust the size of the icon
  iconAnchor: [15, 50],  // The point of the icon that is anchored to the map
  popupAnchor: [0, -50], // The point from where the popup should open
});

const GeoCoderMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([60, 19]); // Default coordinates (for example)

  useEffect(() => {
    // Function for geocoding the address to latitude and longitude
    const geocodeAddress = async () => {
      if (!address) return; // If address is empty, do nothing
      
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
        );
        const data = await response.json();
        
        if (data && data.length > 0) {
          const { lat, lon } = data[0]; // Get lat and lon from the response
          setPosition([lat, lon]);
          map.flyTo([lat, lon], 13); // Adjust zoom level as necessary
        } else {
          console.warn('No results found for address:', address);
        }
      } catch (err) {
        console.error('Error geocoding address:', err);
      }
    };

    geocodeAddress();
  }, [address, map]); // Re-run the effect when address changes

  return (
    <Marker position={position} icon={CustomIcon}>
      <Popup>{address}</Popup>
    </Marker>
  );
};

export default GeoCoderMarker;
