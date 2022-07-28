import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// import styles and icons
import './styles.scss';
import icon from "src/assets/images/icon-jumelle.png";

// import data
import interestPointsData from '../data/interestPointsData.json';

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
    // on inititalise la map, centrée entre le point de départ et d'arrivée
    if (map.current) return; 
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat],
      zoom: zoom
    });4

    // On ajoute le tracé de la route
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

    // On ajoute les points d'intérêt
    map.current.on('load', () => {
      // On charge une image
      map.current.loadImage(
      icon,
      (error, image) => {
      if (error) throw error;
      // On ajoute l'image au style en lui donnant un nom d'icone
      map.current.addImage('custom-marker', image);
      // On ajoute la source contenant la feature qui utilisera l'icone
      map.current.addSource('interestPoints', 
      interestPointsData
      );
       
      // Add a symbol layer
      map.current.addLayer({
      'id': 'interestPoints',
      'type': 'symbol',
      'source': 'interestPoints',
      'layout': {
        'icon-image': '{icon}',
        'icon-allow-overlap': true
      }
      });
      }
      );
      });

      // Quand on clique, ça ouvre une pop-up au niveau des coordonnées du point d'intérêt
      map.current.on('click', 'interestPoints', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
         
      //  // On s'assure que le zoom est suffisamment out pour voir toues les points d'intérêt
      //   while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      //   }
         
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map.current);
        });
         
        // On change le pointeur du curseur
        map.current.on('mouseenter', 'interestPoints', () => {
        map.current.getCanvas().style.cursor = 'pointer';
        });
         
        map.current.on('mouseleave', 'interestPoints', () => {
        map.current.getCanvas().style.cursor = '';
        });
  });

  return (
    <div>
      <div className="sidebar">
       <div className="details">7 Bornes de recharge | 4 Points d'intéret</div>
       <div className="sauvegarde">Pour sauvegarder votre trajet, <u>connectez-vous!</u></div>
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
