import { useEffect, useState } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../../src/types/offer';

export function useMap(mapRef: React.RefObject<HTMLDivElement>, city: City) {
  const [map, setMap] = useState<L.Map | null>(null);
  
  useEffect(() => {
    if (mapRef.current && !map) {
      const instance = L.map(mapRef.current).setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(instance);

      setMap(instance);
    }
  }, [mapRef, city, map]);

  return map;
}
