import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [51.505, -0.09]; // Map center
  const pickupPosition = [51.51, -0.1]; // Pickup location
  const dropoffPosition = [51.49, -0.08]; // Dropoff location

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={pickupPosition}>
        <Popup>Pickup Location</Popup>
      </Marker>
      <Marker position={dropoffPosition}>
        <Popup>Dropoff Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;