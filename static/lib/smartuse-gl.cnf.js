var su_resources = {
  "wohnen-2015": new MapResource("wohnen-2015","vector","mapbox://smartuse.1yoh08tv","Wohnen-2015-4n4x2g"),
  "arbeiten-2015": new MapResource("arbeiten-2015","vector","mapbox://smartuse.a72hsm3m","Arbeiten-2015-0yxhi7"),
  "wohnen-delta": new MapResource("wohnen-delta","vector","mapbox://smartuse.55809z6u","Wohnen-Deltas-46528h"),
  "arbeiten-delta": new MapResource("arbeiten-delta","vector","mapbox://smartuse.6bma52k4","Arbeitsplaetze-Deltas-9s200q"),
  "zug-velo-routen": new MapResource("zug-velo-routen","vector","mapbox://smartuse.0vt88gs9","su-mkz-zug-routen-8k8kzx"),
  "bikeable": new MapResource("bikeable","vector","mapbox://smartuse.39f7d3wm","su-mkz-zug-bikeable-0q05kz"),
  "bikeable-text": new MapResource("bikeable-text","vector","mapbox://smartuse.39f7d3wm","su-mkz-zug-bikeable-0q05kz"),
  "velovorteil-zug": new MapResource("velovorteil-zug","vector","mapbox://smartuse.d7t3hrc4","zug-erreichbarkeiten-wgs84-sq-1oy9gu"),
  "velovorteil-zug-perimeters": new MapResource("velovorteil-zug-perimeters","vector","mapbox://smartuse.autsvrt1","su-mkz-zug-perimeter-axlv3u"),
  "zug-30-min-velo": new MapResource("zug-30-min-velo","vector","mapbox://smartuse.cst820f2","su-mkz-zug-30-min-velo-8e0i7x"),
  "zug-einzugsgebiet": new MapResource("zug-einzugsgebiet","vector","mapbox://smartuse.1tp99a2u","su-mkz-zug-einzug-433a9a"),
  "zug-perimeters": new MapResource("perimeters","vector","mapbox://smartuse.autsvrt1","su-mkz-zug-perimeter-axlv3u"),
  "mkz-gemeinden": new MapResource("mkz-gemeinden","vector","mapbox://smartuse.7y0mnd4l","mkz-9aysqf"),
  "ch-oev-edges": new MapResource("ch-oev-edges","geojson","https://smartuse.ch/uploads/assets/geojson/ch-oev-edges.geojson","")
};

var su_dataranges = {
  "wohnen-2015-size": new MapDataRange([18,410],["30 Einwohner","300+ Einwohner"],"WTOT","",[16,54],0.01,false,_zoomModifiers),
  "wohnen-2015-opacity": new MapDataRange([0,0.8],["Hohe Diversität","Geringe Diversität"],"p_score","",[0.4,1],1,true),
  "arbeiten-2015-size": new MapDataRange([20,200],["30 Arbeitsplätze","300+ Arbeitsplätze"],"p_sum","",[20,54],0.005,false,_zoomModifiers),
  "arbeiten-2015-opacity": new MapDataRange([0,0.8],["Hohe Diversität","Geringe Diversität"],"p_score","",[0.4,1],1,true),
  "dynamik-size": new MapDataRange([4,400],["5 Arbeitsplätze/Anwohner","1500 Arbeitsplätze+/300 Anwohner"],"p_delta",[16,30],true),
  "dynamik-opacity": new MapDataRange([4,400],["Abnahme","Zunahme"],"p_score",[0.4,1],true),
  "velovorteil-range": new MapDataRange([0,0.8],["Hohe Diversität","Geringe Diversität"],"p_score","",[0.4,1],1,true),
  "velo-scoredeltas": new MapDataRange([-1,1],["Mehr Potenzial","Mehr Einpendler"],"p_score","",[],1,true),
  "smi-einpendler": new MapDataRange([4,400],["4 wöchentliche Einpendler","300 wöchentliche Einpendler"],"p_score","",[4,400],1,true),
  "velo-isochronen": new MapDataRange([4],["30 Velominuten"],"p_score","",[],1,true),
  "ch-oev-edges": new MapDataRange([4],["Zug"],"p_score","",[],1,true),
}

var su_colors = {
  "wohnen":{
    "1 Zimmer":"#14d8ff",
    "2 Zimmer":"#ff0fdf",
    "3 Zimmer":"#ff1f9a",
    "4 Zimmer":"#ff0000",
    "5 Zimmer":"#a54a4a",
    "6+ Zimmer":"hsl(0,40%,55%)"
  },
  "arbeiten":{
    "Industrie & produzierendes Gewerbe":"rgb(230, 0, 0)",
    "Bildung & Forschung":"rgb(255, 0, 183)",
    "Publikumsorientierte Nutzungen":"rgb(97, 213, 255)",
    "Finanzdienstleistungen":"rgb(38, 99, 156)",
    "Sonstige Dienstleistungen":"rgb(117, 151, 163)",
    "Freizeit, Gastronomie, Hotelerie":"rgb(164, 255, 36)",
    "Gesundheit & Soziale Einrichtungen":"rgb(255, 234, 97)"
  },
  "dynamik":{
    "Veränderung im Wohnungsmarkt":"rgb(48, 59, 217)",
    "Veränderung im Arbeitsmarkt":"rgb(234, 11, 96)"
  },
  "velo-scoredeltas": {
    "< Mehr Potenzial":"hsl(157, 74%, 39%)",
    "  - ":"hsl(203, 0%, 57%)",
    "Mehr Einpendler >":"hsl(36, 78%, 56%)"
  },
  "smi-einpendler": {
    "< ca. 21":"hsla(186, 64%, 69%, 0.1)",
    " Einpendler/Woche ":"hsla(186, 64%, 69%, 0.35)",
    "ca. 14'000 >":"hsla(186, 64%, 69%, 0.6)"
  },
  "velovorteil": {
    "< 0 min":"hsl(0, 0%, 0%)",
    " Vorteil ":"hsla(187, 93%, 52%, 0.5)",
    "35min+ >":"hsla(317, 100%, 62%, 0.5)"
  }
};

var su_color_tables = {
  "wohnen": new MapColorTable("p_primary",{
    "W15T5":"#a54a4a",
    "W15T4":"#ff0000",
    "W15T3":"#ff1f9a",
    "W15T2":"#ff0fdf",
    "W15T1":"#14d8ff",
    "W15T6":"hsl(0,40%,55%)"
  }),
  "arbeiten": new MapColorTable("p_primary",{
    "B150801VZA":"#7597a3",
    "B150802VZA":"#7597a3",
    "B150803VZA":"#7597a3",
    "B150804VZA":"#e60000",
    "B150805VZA":"#e60000",
    "B150806VZA":"#e60000",
    "B150807VZA":"#e60000",
    "B150808VZA":"#e60000",
    "B150809VZA":"hsl(0,0%,0%)",
    "B150810VZA":"#e60000",
    "B150811VZA":"#e60000",
    "B150812VZA":"#e60000",
    "B150813VZA":"#e60000",
    "B150814VZA":"#e60000",
    "B150815VZA":"#e60000",
    "B150816VZA":"#e60000",
    "B150817VZA":"#e60000",
    "B150818VZA":"#e60000",
    "B150819VZA":"#e60000",
    "B150820VZA":"#e60000",
    "B150821VZA":"#e60000",
    "B150822VZA":"#e60000",
    "B150823VZA":"#e60000",
    "B150824VZA":"#e60000",
    "B150825VZA":"#e60000",
    "B150826VZA":"#e60000",
    "B150827VZA":"#e60000",
    "B150828VZA":"#e60000",
    "B150829VZA":"#e60000",
    "B150830VZA":"#e60000",
    "B150831VZA":"#e60000",
    "B150832VZA":"#e60000",
    "B150833VZA":"#e60000",
    "B150834VZA":"hsl(0,0%,0%)",
    "B150835VZA":"#7597a3",
    "B150836VZA":"#7597a3",
    "B150837VZA":"#7597a3",
    "B150838VZA":"#f52929",
    "B150839VZA":"#f52929",
    "B150840VZA":"#f52929",
    "B150841VZA":"#7597a3",
    "B150842VZA":"#7597a3",
    "B150843VZA":"#5b9cb3",
    "B150844VZA":"#7597a3",
    "B150845VZA":"#61d5ff",
    "B150846VZA":"#61d5ff",
    "B150847VZA":"#61d5ff",
    "B150848VZA":"#b8ecff",
    "B150849VZA":"#61d5ff",
    "B150850VZA":"#7597a3",
    "B150851VZA":"#7597a3",
    "B150852VZA":"#f52929",
    "B150853VZA":"#7597a3",
    "B150854VZA":"#a4ff24",
    "B150855VZA":"#a4ff24",
    "B150856VZA":"hsl(85,100%,57%)",
    "B150857VZA":"#7597a3",
    "B150858VZA":"#7597a3",
    "B150859VZA":"#7597a3",
    "B150860VZA":"#7597a3",
    "B150861VZA":"#7597a3",
    "B150862VZA":"#7597a3",
    "B150863VZA":"#7597a3",
    "B150864VZA":"#26639c",
    "B150865VZA":"#26639c",
    "B150866VZA":"#26639c",
    "B150867VZA":"hsl(196,20%,55%)",
    "B150868VZA":"#7597a3",
    "B150869VZA":"#7597a3",
    "B150870VZA":"#7597a3",
    "B150871VZA":"#7597a3",
    "B150872VZA":"#ff00b7",
    "B150873VZA":"#ff00b7",
    "B150874VZA":"#ff00b7",
    "B150875VZA":"#7597a3",
    "B150876VZA":"#7597a3",
    "B150877VZA":"#7597a3",
    "B150878VZA":"#7597a3",
    "B150879VZA":"hsl(196,100%,86%)",
    "B150880VZA":"#7597a3",
    "B150881VZA":"#7597a3",
    "B150882VZA":"#7597a3",
    "B150883VZA":"#7597a3",
    "B150884VZA":"#7597a3",
    "B150885VZA":"#ff00b7",
    "B150886VZA":"#bfab2b",
    "B150887VZA":"#bfab2b",
    "B150888VZA":"#bfab2b",
    "B150889VZA":"#bfab2b",
    "B150890VZA":"#a4ff24",
    "B150891VZA":"hsl(88,84%,67%)",
    "B150892VZA":"#a4ff24",
    "B150893VZA":"hsl(85,100%,57%)",
    "B150894VZA":"#ffea61",
    "B150895VZA":"#5b9cb3",
    "B150896VZA":"#5b9cb3"
  })
}

// ["match",["get","p_primary"],"W15T5","#a54a4a","W15T4","#ff0000","W15T3","#ff1f9a","W15T2","#ff0fdf","W15T1","#14d8ff","W15T6","hsl(0,40%,55%)","hsla(0,0%,0%,0)"]
// ["interpolate",["linear"],["zoom"],10.316,["*",["*",1.5,["get","WTOT"]],0.01],12.401,["*",["*",5,["get","WTOT"]],0.01],13.61,["*",["*",12,["get","WTOT"]],0.01],14.35,["*",["*",19,["get","WTOT"]],0.01],16,54,22,410]
// ["interpolate",["linear"],["get", "p_score"],0,1,0.4,0]

var su_styles = {

  // STATPOP
  "statpop-diversity": new MapPaint(
    su_color_tables["wohnen"].colorTableJSON(),
    "circle",
    su_dataranges["wohnen-2015-size"].interpolateJSON(),
    su_dataranges["wohnen-2015-opacity"].interpolateJSON(),
    "#fff",
    0.5,
    "",0,[]),
  "statpop-uncolored": new MapPaint(
    "transparent",
    "circle",
    su_dataranges["wohnen-2015-size"].interpolateJSON(),
    su_dataranges["wohnen-2015-opacity"].interpolateJSON(),
    "#fff",
    1,
    "",0,[]),
  "statpop-uncolored-thin": new MapPaint(
    "transparent",
    "circle",
    su_dataranges["wohnen-2015-size"].interpolateJSON(),
    su_dataranges["wohnen-2015-opacity"].interpolateJSON(),
    "#fff",
    0.5,
    "",0,[]),
  "statpop-uncolored-muted": new MapPaint(
    "transparent",
    "circle",
    su_dataranges["wohnen-2015-size"].interpolateJSON(),
    su_dataranges["wohnen-2015-opacity"].interpolateJSON(),
    "#aaa",
    0.5,
    "",0,[]),
  "statent-delta": new MapPaint(
    ["interpolate",["linear"],["get","delta_sum"],-141,"hsl(360,73%,19%)",0,"hsl(141,0%,77%)",247,"hsl(350,89%,74%)"],
    "circle",
    ["interpolate",["linear"],["zoom"],8,["*",["*",2,["abs",["get","delta_sum"]]],0.005],14.35,["*",["*",4,["abs",["get","delta_sum"]]],0.005],16,["*",["*",5,["abs",["get","delta_sum"]]],0.005]],
    0.87,
    "#ea0b60",
    2,
    "",0,[]),

  // STATENT
  "statent-diversity": new MapPaint(
    su_color_tables["arbeiten"].colorTableJSON(),
    "circle",
    ["interpolate",["linear"],["zoom"],12,["interpolate",["linear"],["get","p_sum"],0,["*",["*",0.2,["get","p_sum"]],0.04],1000,["*",["*",0.2,["get","p_sum"]],0.02],7000,["*",["*",0.2,["get","p_sum"]],0.00075]],13,["interpolate",["linear"],["get","p_sum"],0,["*",["*",0.4,["get","p_sum"]],0.04],300,["*",["*",0.4,["get","p_sum"]],0.02],7000,["*",["*",0.4,["get","p_sum"]],0.007]],14,["interpolate",["linear"],["get","p_sum"],0,["*",["*",0.6,["get","p_sum"]],0.04],300,["*",["*",0.6,["get","p_sum"]],0.02],7000,["*",["*",0.6,["get","p_sum"]],0.00075]],14.5,["interpolate",["linear"],["get","p_sum"],0,["*",["*",1.25,["get","p_sum"]],0.04],300,["*",["*",1.25,["get","p_sum"]],0.02],7000,["*",["*",1.25,["get","p_sum"]],0.00075]]],
    ["interpolate",["linear"],["get", "p_score"],0,1,0.1,0],
    "#fff",
    0.5,
    "",0,[]),
  "statent-uncolored": new MapPaint(
    "transparent",
    "circle",
    su_dataranges["arbeiten-2015-size"].interpolateJSON(),
    su_dataranges["arbeiten-2015-opacity"].interpolateJSON(),
    "#fff",
    0.5,
    "",0,[]),
  "statpop-delta": new MapPaint(
    ["interpolate",["linear"],["get","delta_sum"],-100,"hsl(242,84%,19%)",0,"hsl(141,0%,77%)",100,"hsl(229,87%,79%)"],
    "circle",
    ["interpolate",["linear"],["zoom"],10.316,["*",["*",10,["abs",["get","delta_sum"]]],0.05],12,["*",["*",3,["abs",["get","delta_sum"]]],0.05],16,["*",["*",5,["abs",["get","delta_sum"]]],0.05]],
    0.8,
    "#303bd9",
    2,
    "",0,[]),

  // Zug Perimeters
  "velovorteil-zug-perimeters": new MapPaint(
    "#fff",
    "line",
    4,
    1,
    "#fff",
    4,
    "",0,[]),

  // Velovorteil
  "velovorteil-fill": new MapPaint(
    ["interpolate",["linear"],["get", "DM-BA"],0,"hsl(0, 0%, 0%)",10,"hsla(187, 93%, 52%, 0.5)",30,"hsla(317, 100%, 62%, 0.5)"],
    "fill",
    0,
    0.6,
    "transparent",
    0,
    "",0,[]),

  // Velovorteil Extrusion
  "velovorteil-fill-extrusion": new MapPaint(
    ["interpolate",["linear"],["get", "DM-BA"],0,"hsla(187, 0%, 34%, 0)",10,"hsla(187, 93%, 52%, 0.5)",30,"hsla(317, 100%, 62%, 0.5)"],
    "fill-extrusion",
    ["*",["get", "DM-BA"],25],
    0,
    "transparent",
    0,
    "",0,[]),

  // SMI Einzug
  "smi-einzug": new MapPaint(
    ["interpolate",["linear"],["get", "Count"],10,"hsla(186, 64%, 69%, 0.1)",1000,"hsla(186, 64%, 69%, 0.6)"],
    "fill",
    4,
    1,
    "#fff",
    0.5,
    "",0,[]),

  // Bikeable marker
  "bikeable-marker": new MapPaint(
    "hsla(0,0,0,0.8)",
    "circle",
    8,
    1,
    "yellow",
    3,
    "",0,[]),

  "bikeable-text": new MapPaint(
    "yellow",
    "symbol",
    4,
    1,
    "hsla(0, 0%, 100%, 0.85)",
    4,
    "",0,[]),

  // OEV edges
  "ch-oev-edges": new MapPaint(
    "#ccc",
    "line",
    1,
    1,
    "transparent",
    0,
    "",0,[]),

  // Routeanalysis
  "routes-all": new MapPaint(
    "#ccc",
    "line",
    1,
    1,
    "transparent",
    0,
    "",0,[]),
  "routes-smi": new MapPaint(
    "#fff",
    "line",
    ["interpolate",["linear"],["get","smi-einpendler_sum"],5,0,2500,10],
    ["interpolate",["linear"],["get","smi-einpendler_sum"],0,0,5,1],
    "",
    0,
    "",0,[]),
  "routes-vorteil": new MapPaint(
    "#fff",
    "line",
    ["interpolate",["linear"],["get","dm-bikeadvantage_sum"],5,0,10000,10],
    ["interpolate",["linear"],["get","dm-bikeadvantage_sum"],0,0,5,1],
    "",
    0,
    "",0,[]),
  "routes-vorteil-toned-down": new MapPaint(
    "rgba(255,255,255,0.25)",
    "line",
    ["interpolate",["linear"],["get","dm-bikeadvantage_sum"],3,0,10000,10],
    ["interpolate",["linear"],["get","dm-bikeadvantage_sum"],0,0,5,1],
    "",
    0,
    "",0,[]),
  "routes-deltas": new MapPaint(
    ["interpolate",["linear"],["get","einpendler-bikeadvantage"],-0.363,"hsl(157, 74%, 39%)",0,"hsl(203, 0%, 57%)",0.272,"hsl(36, 78%, 56%)"],
    "line",
    ["interpolate",["linear"],["get","einpendler-bikeadvantage"],-0.363,6,0,0.2,0.272,7],
    ["interpolate",["linear"],["get","einpendler-bikeadvantage"],-0.1,1,0,0.3,0.1,1],
    "transparent",
    0,
    "",0,[]),


  // Zug 30 min Velo
  "zug-30min-velo": new MapPaint(
    "#fff",
    "line",
    2,
    1,
    "transparent",
    0,
    "",0,[2,2.5]),

  // Perimeters
  "perimeters": new MapPaint(
    "yellow",
    "line",
    5,
    0.75,
    "transparent",
    0,
    "",0,[2,0.5]),

  "perimeter-highlighted": new MapPaint(
    "yellow",
    "line",
    5,
    0.75,
    "transparent",
    0,
    "",0,[2,0.5]),


  // MKZ Gemeinsden
  "mkz-gemeinden": new MapPaint(
    ["case",["has", "plz"],"hsla(196, 92%, 55%, 0.35)","hsla(203, 100%, 59%, 0.2)"],
    "fill",
    1,
    1,
    "transparent",
    0,
    "",0,[])

};

var su_layouts = {
  "bikeable-text": new MapLayout(
    "name",
    13,"left","left",
    [1.2, 0],0,
    ["Roboto Bold", "Arial Unicode MS Bold"]
  )
}

var su_annotation_styles = {
  "lines": new MapPaint(
    ["get","color"],"line",["get","width"]
  ),
  "lines-dashed": new MapPaint(
    ["get","color"],"line",["get","width"],1,"transparent",1,"transparent",0,[2,0.2]
  ),
  "polygons": new MapPaint(
    ["get","color"],"line",1
  ),
  "text": new MapPaint(
    "#fff","symbol",0,1,"",0,"#000",500,["Roboto Bold", "Arial Unicode MS Bold"]
  ),
  "circle": new MapPaint(
    "transparent","circle",["get","radius"],1,["get","color"],3
  )
}

var su_annotation_layouts = {
  "text": new MapLayout(
    "text",14,"left","left",[-1,0],["get","rotation"]
  )
}

var su_legends = {
  "wohnen":[
    new MapLegend("color-range",su_colors["wohnen"]),
    new MapLegend("opacity-range",su_dataranges["wohnen-2015-opacity"]),
    new MapLegend("circle-size-range",su_dataranges["wohnen-2015-size"])
  ],
  "wohnen-uncolored":[
    new MapLegend("circle-size-range",su_dataranges["wohnen-2015-size"])
  ],
  "arbeiten":[
    new MapLegend("color-range",su_colors["arbeiten"]),
    new MapLegend("opacity-range",su_dataranges["arbeiten-2015-opacity"]),
    new MapLegend("circle-size-range",su_dataranges["arbeiten-2015-size"])
  ],
  "dynamik-wohnen-arbeiten":[
    new MapLegend("color-range",su_colors["dynamik"]),
    new MapLegend("opacity-range",su_dataranges["dynamik-opacity"]),
    new MapLegend("circle-size-range",su_dataranges["dynamik-size"])
  ],
  "veloisochronen":[
    new MapLegend("dashed-line",su_dataranges["velo-isochronen"])
  ],
  "ch-oev-edges":[
    new MapLegend("line",su_dataranges["ch-oev-edges"])
  ],
  "velovorteil":[
    new MapLegend("color-range-gradient",su_colors["velovorteil"])
  ],
  "smi-einpendler":[
    new MapLegend("color-range-gradient",su_colors["smi-einpendler"])
  ],
  "velo-scoredeltas":[
    new MapLegend("color-range-gradient",su_colors["velo-scoredeltas"])
  ]
};
