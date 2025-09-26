// src/components/MapView.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position: [number, number] = [9.9312, 76.2673]; // Coordinates for Kochi, Kerala

function MapView() {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Kochi, Kerala
        </Popup>
      </Marker>
    </MapContainer>
  );
}
export default MapView;
