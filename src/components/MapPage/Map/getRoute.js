async function getRoute(map, start, coordsReplace, end, accessToken) {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start};${coordsReplace};${end}?steps=true&geometries=geojson&access_token=${accessToken}`,
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
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#b6db68',
        'line-width': 5,
        'line-opacity': 0.75
      }
    }, 'point');
  }
}

export default getRoute;