e<template>
  <div id='map'></div>
  <div class="map-overlay active pin-topleft z100" id="sidebar">
     <div class="pad1 section clearfix">
       <span class="small uppercase label strong">
         <ul id="story-points">
         </ul>
       </span>
       <div id="story-subtitle">
       </div>
       <div id="story-text">
       </div>
     </div>
  </div>
  <div class="map-overlay active pin-bottomleft" id="map-options">
    <div class="pad1 section clearfix">
      <span class="small uppercase label strong">Darstellung</span>
      <div class="rounded-toggle fr col4">
        <input id="pizza" type="radio" name="rtoggle" value="pizza" checked="checked">
        <label for="pizza" class="col6 center" onclick="tilt(mapWrapper.map,false)">2D</label>
        <input id="penny" type="radio" name="rtoggle" value="penny">
        <label for="penny" class="col6 center" onclick="tilt(mapWrapper.map,true)">3D</label>
      </div>
    </div>
    <div class="pad1 section clearfix">
      <span class="small uppercase label strong">Labels</span>
      <div class="rounded-toggle fr col4">
        <input id="labelon" type="radio" name="labels" value="labelon">
        <label for="labelon" class="col6 center" onclick="toggleLabels(mapWrapper.map,true)">AN</label>
        <input id="labeloff" type="radio" name="labels" value="labeloff" checked="checked">
        <label for="labeloff" class="col6 center" onclick="toggleLabels(mapWrapper.map,false)">AUS</label>
      </div>
    </div>
  </div>
  <div class='map-overlay pin-bottom-right' id='legend'></div>
  <!--

  https://rawcdn.githack.com/smartuse/smartuse-gl/112c0f431574818fe6007163081b7b7d3c5fd0e1/
  -->
  <script src="https://rawcdn.githack.com/smartuse/smartuse-gl/112c0f431574818fe6007163081b7b7d3c5fd0e1/js/smartuse-gl-story.js"></script>
  <script src="https://rawcdn.githack.com/smartuse/smartuse-gl/112c0f431574818fe6007163081b7b7d3c5fd0e1/js/smartuse-gl-map.js"></script>
  <script src="/uploads/assets/cnf/smartuse-gl.cnf.js"></script>
</template>

<script>
export default {
  components: {
  },
  props: ['geojson'],
}


var token = "pk.eyJ1Ijoic21hcnR1c2UiLCJhIjoiY2pkNGowcGdzMHhpbzMzcWp3eGYydGhmMiJ9.k9QyYo-2pFvyyFDJiz16UA";
var baseStyle = "mapbox://styles/smartuse/cjtrhdbov226f1fny42msve3k";

var story_annotations = [
  new AnnotationLayerCnf(
    "annotation-lines",
    new MapResource("annotation-lines","geojson","/uploads/assets/geojson/dietikon-annotations-lines.geojson",""),
    "lines"),
  new AnnotationLayerCnf(
    "annotation-lines",
    new MapResource("annotation-lines-dashed","geojson","/uploads/assets/geojson/dietikon-annotations-lines-dashed.geojson",""),
    "lines-dashed"),
  new AnnotationLayerCnf(
    "annotation-polygons",
    new MapResource("annotation-polygons","geojson","/uploads/assets/geojson/dietikon-annotations-polygons.geojson",""),
    "polygons"),
  new AnnotationLayerCnf(
    "annotation-circle",
    new MapResource("annotation-circle","geojson","/uploads/assets/geojson/dietikon-annotations-circle.geojson",""),
    "circle"),
  new AnnotationLayerCnf(
    "annotation-text",
    new MapResource("annotation-text","geojson","/uploads/assets/geojson/dietikon-annotations-text.geojson",""),
    "text")
];

var mapCtr = new MapCoords(8.51980,47.18284);
var mapWrapper = new Map(token,baseStyle,"map",mapCtr,9,story_annotations);


var story_views = {
  "view-wohnen": new MapView("view-wohnen","8.404833,47.406623",12),
  "view-arbeiten": new MapView("view-arbeiten","8.404833,47.406623",12),
  "view-inmkz": new MapView("view-zuginmkz","8.404833,47.406623",9.5),
  "view-smi": new MapView("view-inmkz","8.404833,47.406623",11),
  "view-street-stadtboulevard": new MapView("view-street-overview","8.404833,47.401623",14),
  "view-street-quartiere": new MapView("view-street-overview","8.404833,47.406623",14.5),
  "view-street-overview": new MapView("view-street-overview","8.404833,47.406623",12.75),
  "view-street": new MapView("view-street-overview","8.404833,47.406623",11.75)
};

dietikon_resources = {
  "dietikon-neighbourhoods": new MapResource("dietikon-neighbourhoods","geojson","/uploads/assets/geojson/dietikon-neighbourhoods.geojson",""),
  "dietikon-neighbourhoods-label": new MapResource("dietikon-neighbourhoods-label","geojson","/uploads/assets/geojson/dietikon-neighbourhoods.geojson",""),
  "dietikon-30min": new MapResource("dietikon-30min","geojson","/uploads/assets/geojson/dietikon-30-min.geojson",""),
};

dietikon_styles= {
  "dietikon-neighbourhoods": new MapPaint(
    "yellow",
    "fill",
    2,
    0.2,
    "#fff",
    20,
    "",0,""),
  "dietikon-neighbourhoods-label": new MapPaint(
    "#fff","symbol",0,1,"",0,"transparent",0,["Roboto Bold", "Arial Unicode MS Bold"]
  ),
}

var dietikon_layouts = {
  "dietikon-neighbourhoods-label": new MapLayout(
    "Name",14,"left","left",[-1,0],0
  )
}

var story = new StoryBoard([
  new StoryLayerState("dietikon-intro",[
    new StoryLayerCnf("mkz-area",
      su_resources["mkz-gemeinden"],
      su_styles["mkz-gemeinden"],["all",["match",["get", "mkz-status"],["Vollmitglied"],true,false]],"")
  ],story_views["view-inmkz"],
  "Die Case Study","Dietikon und das Limmatfeld im Metropolitanraum Zürich","\n\nHintergrund: Smart Use Lab Der funktionale Metropolitanraum"),
  new StoryLayerState("dietikon-inbetween",[
    new StoryLayerCnf("dietikon-wohnen",
      su_resources["wohnen-2015"],
      su_styles["statpop-uncolored"],"",su_legends["wohnen-uncolored"]),
    new StoryLayerCnf("dietikon-30min",
      dietikon_resources["dietikon-30min"],
      su_styles["zug-30min-velo"],"","")
  ],story_views["view-street"],
  "Zwischen Baden und Zürich","","\n\nHintergrund: Smart Use Lab GIS-Daten"),
  new StoryLayerState("dietikon-limmattalbahn",[
    new StoryLayerCnf("mkz-wohnen",
      su_resources["wohnen-2015"],
      su_styles["statpop-uncolored-muted"],"",su_legends["wohnen-uncolored"]),
    new StoryLayerCnf("dietikon-perimeter",
      su_resources["zug-perimeters"],
      su_styles["perimeters"],["==","segment","v-zug"],""),
    new StoryLayerCnf("dietikon-30min",
      dietikon_resources["dietikon-30min"],
      su_styles["zug-30min-velo"],"","")
  ],story_views["view-street-overview"],
  "Limmattalbahn","",""),
  new StoryLayerState("dietikon-stadtboulevard",[
    new StoryLayerCnf("mkz-wohnen",
      su_resources["wohnen-2015"],
      su_styles["statpop-uncolored-muted"],"",su_legends["wohnen-uncolored"]),
    new StoryLayerCnf("dietikon-perimeter",
      su_resources["zug-perimeters"],
      su_styles["perimeters"],["==","segment","v-zug"],""),
    new StoryLayerCnf("dietikon-30min",
      dietikon_resources["dietikon-30min"],
      su_styles["zug-30min-velo"],"","")
  ],story_views["view-street-stadtboulevard"],
  "Stadtboulevard","",""),
  new StoryLayerState("wohnen",[
    new StoryLayerCnf("mkz-wohnen",
      su_resources["wohnen-2015"],
      su_styles["statpop-diversity"],"",su_legends["wohnen"]),
    new StoryLayerCnf("zug-perimeter",
      su_resources["zug-perimeters"],
      su_styles["perimeters"],["==","segment","v-zug"],""),
    new StoryLayerCnf("dietikon-30min",
      dietikon_resources["dietikon-30min"],
      su_styles["zug-30min-velo"],"","")
  ],story_views["view-street-overview"],
  "Wohnen","",""),
  new StoryLayerState("arbeiten",[
    new StoryLayerCnf("mkz-wohnen",
      su_resources["arbeiten-2015"],
      su_styles["statent-diversity"],"",su_legends["arbeiten"]),
    new StoryLayerCnf("zug-perimeter",
      su_resources["zug-perimeters"],
      su_styles["perimeters"],["==","segment","v-zug"],""),
    new StoryLayerCnf("dietikon-30min",
      dietikon_resources["dietikon-30min"],
      su_styles["zug-30min-velo"],"","")
  ],story_views["view-street-overview"],
  "Arbeitsplätze","",""),
  new StoryLayerState("dietikon-quartiere",[
    new StoryLayerCnf("mkz-wohnen",
      su_resources["wohnen-2015"],
      su_styles["statpop-uncolored-muted"],"",""),
    new StoryLayerCnf("dietikon-quartiere",
      dietikon_resources["dietikon-neighbourhoods"],
      dietikon_styles["dietikon-neighbourhoods"],
      "",""),
    new StoryLayerCnf("dietikon-quartiere-label",
      dietikon_resources["dietikon-neighbourhoods-label"],
      dietikon_styles["dietikon-neighbourhoods-label"],
      "","",dietikon_layouts["dietikon-neighbourhoods-label"])
  ],story_views["view-street-stadtboulevard"],
  "Funktionlale Quartiere","","")
]);

var list = document.getElementById("story-points")

story.printStoryList(list);

mapWrapper.map.on('load', function() {
  loadStory(mapWrapper,story);
});

</script>

<style lang="scss">
</style>


<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.45.0/mapbox-gl.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.45.0/mapbox-gl.css' rel='stylesheet' />
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link href="https://mkz.smartuse.ch/uploads/assets/css/smartuse-base.css" rel="stylesheet">
<link href="https://mkz.smartuse.ch/uploads/assets/css/smartuse-story.css" rel="stylesheet">
<!-- <script src="story.js"></script> -->
<!-- <script src="../smartuse-gl/cnf/smartuse-cnf.js"></script> -->
