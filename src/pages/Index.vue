<template lang="pug">
layout
  .scans
    ScanCard(v-for='edge in $page.scans.edges', :key='edge.node.id', :scan='edge.node')
  .home-links
    a(href='https://cividi.ch', target='_blank', rel='noopener') Cividi
    a(href='https://gridsome.org/docs', target='_blank', rel='noopener') Gridsome
    a(href='https://github.com/cividi', target='_blank', rel='noopener') Sources
</template>

<page-query>
{
  scans: allScan {
    edges {
      node {
        id
        title
        path
        preview (width: 120, blur: 0)
        ...on Scan {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>
<script>
import ScanCard from '~/components/ScanCard.vue'

export default {
  components: {
    ScanCard
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
