import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import getRoute from './getRoute'

// import styles and icons
import './styles.scss';

// import data
import interestPointsData from '../data/interestPointsData.json';
import { accessToken } from 'mapbox-gl';

accessToken = 'pk.eyJ1IjoieWJyZXRvbm5ldCIsImEiOiJjbDVxdXliOHQweHV3M2tvM2hlMG41cXFwIn0.K1s56VTf9EAsagytjhRKSw';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const departureLongitude = useSelector((state) => state.mapData.departureLongitude);
  const departureLatitude = useSelector((state) => state.mapData.departureLatitude);
  const arrivalLongitude = useSelector((state) => state.mapData.arrivalLongitude);
  const arrivalLatitude = useSelector((state) => state.mapData.arrivalLatitude);
  const lng = (departureLongitude + arrivalLongitude) / 2;
  const lat = (departureLatitude + arrivalLatitude) / 2;


  useEffect(() => {
    // on inititalise la map, centrée entre le point de départ et d'arrivée
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat], // starting position
      zoom: 6
    });

    // On récupère les points de départ et d'arrivée
    const start = [departureLongitude, departureLatitude];
    const end = [arrivalLongitude, arrivalLatitude];

    // On récupère les coordonnées des points d'intérêt
    const coords = interestPointsData.data.features.map(feature => feature.geometry.coordinates);
    const coordsReplace = JSON.stringify(coords).replaceAll("],[", ";").replace("[[", "").replace("]]", "");

    // On récupère les coordonnées des balises de recharge
    // * TO DO *

    // On trace le trajet
    map.current.on('load', () => {
      getRoute(map, start, coordsReplace, end, accessToken);

      // On ajoute les points de départs de d'arrivée
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
          'circle-radius': 5,
          'circle-color': '#6cc573'
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
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
