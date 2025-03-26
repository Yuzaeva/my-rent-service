import React, { useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

interface Points {
  id: string;
  title: string;
  lat: number;
  lng: number;
}

interface City {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface MapProps {
  city: City;
  points: Points[];
  selectedPoint: Points | null;
  hoveredPointId: string | null;
  height: string;
  width: string;
}

const Map: React.FC<MapProps> = ({ city, points, selectedPoint, hoveredPointId, height, width }: MapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]); // Добавляем реф для хранения маркеров

  // Создаем иконки для маркеров
  const defaultIcon = L.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const selectedIcon = L.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    // Инициализация карты
    if (mapRef.current && !mapInstanceRef.current) {
      const map = L.map(mapRef.current, {
        center: [city.latitude, city.longitude],
        zoom: city.zoom,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      // Очистка карты при размонтировании компонента
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // Пустой массив зависимостей - инициализация только один раз

  useEffect(() => {
    if (mapInstanceRef.current) {
      const map = mapInstanceRef.current;

      // Очищаем предыдущие маркеры
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];

      // Добавляем новые маркеры для всех точек
      points.forEach((point) => {
        const isHovered = hoveredPointId === point.id;
        const isSelected = selectedPoint?.id === point.id;
        const icon = isHovered || isSelected ? selectedIcon : defaultIcon;

        const marker = L.marker([point.lat, point.lng], { icon })
          .addTo(map)
          .bindPopup(point.title);

        // Сохраняем маркер в реф
        markersRef.current.push(marker);

        // Обработчики для изменения иконки маркера при наведении
        marker.on('mouseover', () => {
          marker.setIcon(selectedIcon);
        });

        marker.on('mouseout', () => {
          if (!isSelected) {
            marker.setIcon(defaultIcon);
          }
        });
      });

      // Обновляем центр и зум карты
      map.setView([city.latitude, city.longitude], city.zoom);
    }
  }, [city, points, hoveredPointId, selectedPoint]); // Обновляем маркеры при изменении этих пропсов

  return <div ref={mapRef} className="map" style={{ height, width }}></div>;
};

export default Map;