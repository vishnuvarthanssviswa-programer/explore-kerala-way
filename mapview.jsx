import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [10.8505, 76.2711]; // Example: Kerala's center coordinates

function MapView() {
  return (
    <MapContainer center={position} zoom={7} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Kerala, India
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
