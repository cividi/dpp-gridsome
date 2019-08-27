<template lang="pug">
layout
  i-layout
    i-layout(vertical)
      i-layout-aside.scans
        i-collapsible(variant="dark")
          ScanCard(v-for='edge in $page.scans.edges', :key='edge.node.id', :scan='edge.node')
      i-layout-content
        p  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet imperdiet odio. Cras ultricies turpis sed dui molestie maximus. Sed finibus et sapien at ultrices. Pellentesque feugiat tincidunt laoreet. Aliquam pellentesque eros turpis, eu euismod diam accumsan ac. Donec fringilla non enim vel iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur luctus at leo sit amet gravida. Etiam laoreet eu risus sit amet tristique. Vestibulum fermentum sed arcu sit amet rhoncus. Sed hendrerit interdum imperdiet. Mauris molestie vestibulum enim non tincidunt.
    i-layout-footer
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
