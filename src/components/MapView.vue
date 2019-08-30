<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle"
    :center="mapCenter" :zoom="mapZoom">
    <!-- Adding controls -->
    <MglAttributionControl />
    <MglNavigationControl position="top-right" />
    <MglGeolocateControl position="top-right" />
    <MglNavigationControl position="top-right" />
    <MglGeolocateControl position="top-right" />
    <MglScaleControl />
    <!-- Adding GeoJSON layer -->
    <MglGeojsonLayer
      sourceId="1"
      :source="geoJsonSource"
      layerId="perimeter"
      :layer="geoJsonLayer"
    />
  </MglMap>
</template>

<script>
import Mapbox from "mapbox-gl";
import {
  MglMap,
  MglAttributionControl,
  MglNavigationControl,
  MglGeolocateControl,
  MglFullscreenControl,
  MglScaleControl,
  MglGeojsonLayer // https://soal.github.io/vue-mapbox/api/Layers/geojsonlayer.html#props
} from "vue-mapbox";

import PerimeterGeoJson from "./perimeter.geojson"

let ACCESS_TOKEN = "pk.eyJ1Ijoic21hcnR1c2UiLCJhIjoiY2pkNGowcGdzMHhpbzMzcWp3eGYydGhmMiJ9.k9QyYo-2pFvyyFDJiz16UA"
let MAP_STYLE = "mapbox://styles/smartuse/cjtrhdbov226f1fny42msve3k"

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglScaleControl,
    MglAttributionControl,
    MglGeojsonLayer
  },
  data() {
    return {
      accessToken: ACCESS_TOKEN,
      mapStyle: MAP_STYLE,
      geoJsonSource: {
        type: 'geojson',
        data: PerimeterGeoJson,
      },
      geoJsonLayer: {
        type: "circle",
        paint: {
          "circle-color": "red"
        }
      },
      mapCenter: [7.988376656398224, 47.043967465078822],
      mapZoom: 9
    };
  },

  created() {
    this.mapbox = Mapbox;
  }
};
</script>

<style lang="scss">
.mgl-map-wrapper .mapboxgl-map {
  position: relative;
  height: 300px;
}
</style>
