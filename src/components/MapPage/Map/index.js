import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import getRoute from './getRoute.js'

// import styles and icons
import './styles.scss';

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
      center: [-122.662323, 45.523751], // starting position
      zoom: 12
    });
    
    const start = [-122.672323, 45.523751];
    const end = [-123.662323, 44.523751];
    const coords = [-122.662323, 45.523751, -123.662323, 44.523751 ];

    async function getRoute(end) {
      // make a directions request using cycling profile
      // an arbitrary start will always be the same
      // only the end or destination will change
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start};${end}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
      );
      const json = await query.json();
      const data = json.routes[0];
      const route = data.geometry.coordinates;
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };
      // if the route already exists on the map, we'll reset it using setData
      if (map.current.getSource('route')) {
        map.current.getSource('route').setData(geojson);
      }
      // otherwise, we'll make a new request
      else {
        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });
      }
    }
    
    map.current.on('load', () => {
      // make an initial directions request that
      // starts and ends at the same location
      getRoute(end);
    
      // Add starting point to the map
      map.current.addLayer({
        id: 'point',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: start
                }
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: end
                }
              },
            ]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#3887be'
        }
      });

      
    });






    // On ajoute les points d'intérêt
    map.current.on('load', () => {
          map.current.addSource('interestPoints', 
          interestPointsData
          );

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

      // Quand on clique, ça ouvre une pop-up au niveau des coordonnées du point d'intérêt
      map.current.on('click', 'interestPoints', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const image = e.features[0].properties.image;
        const title = e.features[0].properties.title;
        const description = e.features[0].properties.description;
         
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          `<div>
              <img src="${image}" />
              <h3>${title}</h3>
              <p>${description}</p>
          </div>`
          )
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
