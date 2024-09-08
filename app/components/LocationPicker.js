"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationPicker = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const LocationMarker = () => {
    useMapEvents({
      click: (e) => {
        setSelectedLocation(e.latlng);
      },
    });

    return selectedLocation ? <Marker position={selectedLocation} /> : null;
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default LocationPicker;
