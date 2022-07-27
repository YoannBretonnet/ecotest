import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './styles.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoieWJyZXRvbm5ldCIsImEiOiJjbDVxdXliOHQweHV3M2tvM2hlMG41cXFwIn0.K1s56VTf9EAsagytjhRKSw';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const departureLongitude = useSelector((state) => state.mapData.departureLongitude);
  const departureLatitude = useSelector((state) => state.mapData.departureLatitude);
  const arrivalLongitude = useSelector((state) => state.mapData.arrivalLongitude);
  const arrivalLatitude = useSelector((state) => state.mapData.arrivalLatitude);
  const lng = (departureLongitude + arrivalLongitude)/2;
  const lat = (departureLatitude+ arrivalLatitude)/2;
  const zoom = 6;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on('load', () => {
        map.current.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': [
        [-1.54027, 47.21129],
        [-1.50, 47.32],
        [-1.55, 47.45],
        [-1.575, 47.62],
        [-1.9, 47.88],
        [-1.596, 48.21129],
        [-2.00719, 48.63575]
        ]
        }
        }
        });
        map.current.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#01a683',
        'line-width': 8
        }
        });
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
       {zoom} Bornes de recharge | {zoom} Points d'intéret | {zoom} km
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
