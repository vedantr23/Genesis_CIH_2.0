import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MOCK_TASKS, DEFAULT_MAP_ZOOM, OTHER_USERS_ON_MAP } from '../constants';
import { Task } from '../types';
import { useUser } from '../contexts/UserContext';

// Hardcoded Nagpur coordinates
const NAGPUR_COORDINATES: [number, number] = [21.0, 79.0];

// Custom User Icon
const createUserIcon = (avatarUrl: string, isCurrentUser: boolean = false) => {
  return L.divIcon({
    html: `<img src="${avatarUrl}" style="width: ${isCurrentUser ? '36px' : '30px'}; height: ${isCurrentUser ? '36px' : '30px'}; border-radius: 50%; border: 2px solid ${isCurrentUser ? '#cc24dd' : '#2dd4bf'}; box-shadow: 0 0 10px ${isCurrentUser ? '#cc24dd' : '#2dd4bf'};" alt="user avatar" />`,
    className: 'leaflet-custom-user-icon',
    iconSize: isCurrentUser ? [36, 36] : [30, 30],
    iconAnchor: isCurrentUser ? [18, 18] : [15, 15],
  });
};

// Custom Task Icon
const createTaskIcon = (taskType: Task['type']) => {
  let iconHtml = '📌';
  let bgColor = 'bg-slate-500';
  switch (taskType) {
    case 'gig':
      iconHtml = '💼';
      bgColor = 'bg-blue-500';
      break;
    case 'help-request':
      iconHtml = '🤝';
      bgColor = 'bg-green-500';
      break;
    case 'medical-camp':
      iconHtml = '⚕️';
      bgColor = 'bg-red-600';
      break;
  }
  const colorMap: { [key: string]: string } = {
    'bg-blue-500': '#3b82f6',
    'bg-green-500': '#22c55e',
    'bg-red-600': '#dc2626',
    'bg-slate-500': '#64748b'
  };
  const actualBgColor = colorMap[bgColor] || '#64748b';

  return L.divIcon({
    html: `<div style="font-size: 16px; background-color: ${actualBgColor}; padding: 6px; border-radius: 50%; color: white; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">${iconHtml}</div>`,
    className: 'leaflet-custom-task-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
};

const MapPage: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const { currentUser } = useUser();

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        zoomControl: false
      }).setView(NAGPUR_COORDINATES, DEFAULT_MAP_ZOOM);

      // Light map layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(mapRef.current);

      L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);

      // Marker for Nagpur
      L.marker(NAGPUR_COORDINATES)
        .addTo(mapRef.current)
        .bindPopup('<b>Nagpur</b><br>Welcome to the Orange City!');

      // Task markers
      MOCK_TASKS.forEach(task => {
        const marker = L.marker(task.location, { icon: createTaskIcon(task.type) })
          .addTo(mapRef.current!)
          .bindPopup(`<div class="map-popup"><b>${task.title}</b><br>${task.description.substring(0, 100)}...<br><span class="type">Type: ${task.type}</span></div>`);
      });

      // Other users
      OTHER_USERS_ON_MAP.forEach(user => {
        L.marker(user.location, { icon: createUserIcon(user.avatarUrl) })
          .addTo(mapRef.current!)
          .bindPopup(`<div class="map-popup"><b>${user.name}</b><br><span class="skills">${user.skills.join(', ')}</span></div>`);
      });

      // Current user
      if (currentUser) {
        L.marker(currentUser.location, { icon: createUserIcon(currentUser.avatarUrl, true), zIndexOffset: 1000 })
          .addTo(mapRef.current!)
          .bindPopup(`<div class="map-popup current-user-popup"><b>${currentUser.name} (You)</b><br>Your current location</div>`)
          .openPopup();

        mapRef.current.setView(currentUser.location, DEFAULT_MAP_ZOOM + 2);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <div className="h-[calc(100vh-theme(spacing.20)-theme(spacing.10)-52px)] w-full rounded-xl shadow-2xl overflow-hidden border-2 border-gray-300 animate-fadeIn relative">
      <div ref={mapContainerRef} className="leaflet-container" />
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-lg text-xs text-black z-[1000] shadow-lg">
        Map data &copy; OpenStreetMap
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-lg text-sm text-black z-[1000] shadow-xl text-center">
        {currentUser && <p className="font-semibold text-teal-600">Your 2D avatar is on the map!</p>}
        <p className="text-xs text-gray-600">Future: 3D avatar walking simulation with Three.js.</p>
      </div>
    </div>
  );
};

export default MapPage;
