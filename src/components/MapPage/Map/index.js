import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import getRoute from './getRoute'

// import styles and icons
import './styles.scss';
import myImage from 'src/assets/images/borne.png';

// import data
import { accessToken } from 'mapbox-gl';

// import mapBox token
accessToken = 'pk.eyJ1IjoieWJyZXRvbm5ldCIsImEiOiJjbDVxdXliOHQweHV3M2tvM2hlMG41cXFwIn0.K1s56VTf9EAsagytjhRKSw';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const pointCoords = useSelector((state) => state.mapData.pointCoords);
  const {
    stLong,
    stLat,
    arLong,
    arLat,
   } = useSelector((state) => state.mapData.startEndCoords);
  const lng = (stLong + arLong) / 2;
  const lat = (stLat + arLat) / 2;

  useEffect(() => {
    // on inititalise la map, centrée entre le point de départ et d'arrivée
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat],
      zoom: 6
    });

    // On récupère les points de départ et d'arrivée
    const start = [stLong, stLat];
    const end = [arLong, arLat];

    // On récupère les coordonnées des points d'intérêt
    const coords = pointCoords.data.features.map(feature => feature.geometry.coordinates);
    const coordsReplace = JSON.stringify(coords).replaceAll("],[", ";").replace("[[", "").replace("]]", "");

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


      // On ajoute les points d'intérêt
      map.current.addSource('interestPoints',
        pointCoords
      );

      map.current.addLayer({
        'id': 'interestPoints',
        'type': 'symbol',
        'source': 'interestPoints',
        'layout': {
          'icon-image': '{icon}',
        }
      });
    });

    // Quand on clique, ça ouvre une pop-up au niveau des coordonnées du point d'intérêt
    map.current.on('click', 'interestPoints', (e) => {
      // const coordinates = e.features[0].geometry.coordinates.slice();
      const coordinates = e.features[0].geometry.coordinates;
      const {
        description,
        adresse,
        title,
        image,
       } = e.features[0].properties

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          `<div>
        <img src="${image}" />
        <h3>${title}</h3>
          <p>${description}</p>
          <p></p>
          <p>${adresse}</p>
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

    // On ajoute les bornes
    map.current.on('load', () => {
      [
        {
          name: 'borne1',
          id: 'bornes1',
          coord: [-1.61925, 47.49784]
        },
        {
          name: 'borne2',
          id: 'bornes2',
          coord: [-1.89116, 48.3828]
        }
      ].forEach(element => {
        map.current.loadImage(
          myImage,
          (error, image) => {
            if (error) throw error;
  
            // Add the image to the map style.
            map.current.addImage(element.name, image);
  
            // Add a data source containing one point feature.
            map.current.addSource(element.id, {
              'type': 'geojson',
              'data': {
                'type': 'FeatureCollection',
                'features': [
                  {
                    'type': 'Feature',
                    'geometry': {
                      'type': 'Point',
                      'coordinates': element.coord,
                    }
                  }
                ]
              }
            });
  
            // Add a layer to use the image to represent the data.
            map.current.addLayer({
              'id': element.id,
              'type': 'symbol',
              'source': element.id, // reference the data source
              'layout': {
                'icon-image': element.name, // reference the image
                'icon-size': 0.25
              }
            });
          }
        );
      });
      // Load a local image 
    });
  });





  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
