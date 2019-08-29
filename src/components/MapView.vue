<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

let ACCESS_TOKEN = "pk.eyJ1Ijoic21hcnR1c2UiLCJhIjoiY2pkNGowcGdzMHhpbzMzcWp3eGYydGhmMiJ9.k9QyYo-2pFvyyFDJiz16UA"
let MAP_STYLE = "mapbox://styles/smartuse/cjtrhdbov226f1fny42msve3k"

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: ACCESS_TOKEN,
      mapStyle: MAP_STYLE
    };
  },

  created() {
    this.mapbox = Mapbox;
  }
};
</script>
