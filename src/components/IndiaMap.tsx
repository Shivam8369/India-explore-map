import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Landmark, Replace as Palace, Castle, Anchor, Mountain, Waves, TreePine, Building, BookTemplate as Temple } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { locations } from '../data/locations';
import { LocationType } from '../types/location';

const getMarkerIcon = (type: LocationType) => {
  const iconColors = {
    palace: 'gold',
    fort: 'red',
    temple: 'violet',
    monument: 'blue',
    heritage: 'orange',
    beach: 'green',
    hillStation: 'gray',
    wildlife: 'green',
    port: 'blue',
    capital: 'red'
  };

  return new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${iconColors[type]}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

const getPlaceIcon = (type: LocationType) => {
  switch (type) {
    case 'palace':
      return <Palace className="w-4 h-4 text-yellow-600" />;
    case 'fort':
      return <Castle className="w-4 h-4 text-red-600" />;
    case 'port':
      return <Anchor className="w-4 h-4 text-blue-600" />;
    case 'hillStation':
      return <Mountain className="w-4 h-4 text-gray-600" />;
    case 'beach':
      return <Waves className="w-4 h-4 text-green-600" />;
    case 'wildlife':
      return <TreePine className="w-4 h-4 text-green-600" />;
    case 'monument':
      return <Building className="w-4 h-4 text-blue-600" />;
    case 'temple':
      return <Temple className="w-4 h-4 text-violet-600" />;
    default:
      return <Landmark className="w-4 h-4 text-orange-600" />;
  }
};

export default function IndiaMap() {
  const center: [number, number] = [20.5937, 78.9629];
  
  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom={true}
      className="w-full h-full rounded-lg shadow-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coordinates}
          icon={getMarkerIcon(location.type)}
        >
          <Popup>
            <div className="p-2">
              <div className="flex items-center gap-2 mb-2">
                {getPlaceIcon(location.type)}
                <h3 className="font-semibold">{location.name}</h3>
              </div>
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-sm text-gray-600 mb-2">{location.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{location.state}</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span>{location.rating}/5</span>
                </div>
              </div>
              {location.isUnesco && (
                <div className="mt-2 text-xs text-blue-600 font-semibold">
                  UNESCO World Heritage Site
                </div>
              )}
              {location.yearEstablished && (
                <div className="mt-1 text-xs text-gray-500">
                  Established: {location.yearEstablished}
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}