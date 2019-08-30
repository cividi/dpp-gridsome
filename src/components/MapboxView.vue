<template lang="pug">
div
  #map
</template>


<script>
let ACCESS_TOKEN = "pk.eyJ1Ijoic21hcnR1c2UiLCJhIjoiY2pkNGowcGdzMHhpbzMzcWp3eGYydGhmMiJ9.k9QyYo-2pFvyyFDJiz16UA"
let MAP_STYLE = "mapbox://styles/smartuse/cjtrhdbov226f1fny42msve3k"

export default {
  props: ['view'],
  mounted() {
    window.mapboxgl = require('mapbox-gl');
    window.mapboxgl.accessToken = ACCESS_TOKEN;

    let geoparam = this.view;

    let map = new window.mapboxgl.Map({
      container: 'map',
      style: MAP_STYLE,
      center: [ geoparam.lat, geoparam.lon ],
      zoom: geoparam.zoom
    });

    map.on('load', function () {
      map.addLayer({
        "id": "points",
        "type": "circle",
        "paint": {
          "circle-color": "red"
        },
        "source": {
          "type": "geojson",
          "data": geoparam.data.src
        }
      });
      console.log('Loaded layer')

    });
  }
};
</script>

<style lang="scss">
@import '../assets/mapbox-gl.css';

#map {
  position: relative;
  height: 300px;
  width: 100%;
}
</style>
