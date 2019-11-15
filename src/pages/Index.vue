<template lang="pug">
layout
  center
    h2 Showcase
    .scans
      ScanCard(v-for='edge in $page.scans.edges', :key='edge.node.id', :scan='edge.node')
      hr

    h2 Toolbox
    .toolbox
      FlowCard(v-for='edge in $page.toolbox.edges', :key='edge.node.id', :flow='edge.node')
      hr
  i-container(fluid)
    i-row
      i-column
      i-column.intro
        p Das Produkt Gemeindescan umfasst die datengetriebene Analyse einer Gemeinde. Unterschiedliche Aspekte, z.B. Raum - “topographischer Nähe”, Nutzung - “thematische Nähe”, Beziehung - “topologische Nähe”, Dynamik - “Veränderung über die Zeit”, sowie Outputs aus partizipative Prozesse aggregiert durch unsere Projekt
          a(href='https://cividi.ch', target='_blank', rel='noopener') Cividi
          | - werden spezifisch aufbereitet.
        p Experten in der Raumplanung verfassen darauf basierend eine Lesehilfe und einen ersten Synthesebericht je Thema, die Entwicklungspotenziale aufzeigen. Die Ergebnisse sind in diesem privatem Bereich hinterlegt. Jede Analyse (bis 21 Stück pro Gemeindescan) besteht aus kartenbasierten Visualisierungen und Experten-Texten, in Präsentationsform und als Datenpakete gemäss dem Frictionless Data Standard abrufbar. Bei Updates (z.B. jährlich bei statistischen Daten) sind bei Bedarf in eigenem Gemeindescan-Profil hinterlegt.
        h1 À propos
        p SmartUse GmbH gestaltet und betreibt diese Plattform: ein junges Unternehmen mit erheblichem Expertenwissen in den Bereichen Architektur, Raumplanung, Immobilienentwicklung und Data Engineering.
        p Für mehr Informationen besuchen Sie
          a(href="https://smartuse.ch/gemeindescan") smartuse.ch
      i-column
    i-layout-footer
      .home-links
        a(href='https://smartuse.ch', target='_blank', rel='noopener') SmartUse
        a(href='https://gridsome.org/docs', target='_blank', rel='noopener') Gridsome
        a(href='https://frictionlessdata.io/specs', target='_blank', rel='noopener') Frictionless Data
        a(href='https://github.com/smartuse', target='_blank', rel='noopener') Open Source
</template>

<page-query>
{
  scans: allScan {
    edges {
      node {
        id
        title
        path
        preview (width: 160, blur: 0)
        ...on Scan {
            id
            title
            path
        }
      }
    }
  },
  toolbox: allFlow {
    edges {
      node {
        id
        title
        updated
      }
    }
  }
}
</page-query>
<script>
import ScanCard from '~/components/ScanCard.vue'
import FlowCard from '~/components/FlowCard.vue'

export default {
  components: {
    ScanCard, FlowCard
  },
  metaInfo: {
    name: 'home',
    title: 'Gemeindescan'
  }
}
</script>

<style lang="scss">
.home-links {
  margin-top: 5em;
  text-align: center;
  a {
    margin-right: 1rem;
  }
}
</style>
