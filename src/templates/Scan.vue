<template lang="pug">
layout
  i-layout
    i-layout-header.scan-header
      h1.scan-title
        | {{ $page.scan.title }}
    i-layout(vertical)
      i-layout-aside.scans
        i-collapsible(:active='1')
          ScanCard(v-for='edge in $page.scans.edges', :key='edge.node.id', :scan='edge.node')
      i-layout-content.scan-main
        .scan-rendering
          .scan-map(v-if='$page.scan.map_url')
            iframe(:src='$page.scan.map_url', frameborder='0')
          g-image(v-else-if='$page.scan.preview', :src='$page.scan.preview')
          div(v-else='')
            i Rendering not available.
        .scan-content(v-html='$page.scan.content')
      i-layout-aside.scan-meta
        ul.scan-details
          li
            span Author
            em {{ $page.scan.author }}
          li
            span Updated
            em {{ $page.scan.updated }}
        ul.scan-object
          li
            span Object
            em {{ $page.scan.object.name }}
          li
            span Type
            em {{ $page.scan.object.type }}
          li
            span Area
            em {{ $page.scan.object.area }}
          li
            span Perimeter
            em {{ $page.scan.object.perimeter }}
          li
            span Resolution
            em {{ $page.scan.object.resolution }}
        .scan-categories
          span Categories
          ul
            li(v-for='ctg in $page.scan.category') {{ ctg }}
</template>

<script>

// https://vuejsexamples.com/a-treeview-component-for-vuejs/
let tree = {
  label: 'CH',
    nodes: [
      {
        label: 'Aargau',
        nodes: [
          {
            label: 'Hüttenwiler'
          },
          {
            label: 'Grosswangen',
            nodes: [
              {
                label: 'Study 1'
              }
            ]
          }
        ]
      },
      {
        label: 'Zürich'
      }
    ]
}

import ScanCard from '~/components/ScanCard.vue'

export default {
  components: {
    ScanCard
  },
  metaInfo () {
    return {
      title: this.$page.scan.title,
      meta: [
        {
          name: 'author',
          content: this.$page.scan.author
        },{
          name: 'updated',
          content: this.$page.scan.updated
        }
      ]
    }
  }
}
</script>

<page-query>
query Scan ($path: String!) {
  scan: scan (path: $path) {
    title
    author
    updated
    preview (width: 860, blur: 10)
    category
    object {
      name
      type
      area
      perimeter
      resolution
    }
    content
  },
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

<style lang="scss" scoped>
iframe {
  width: 100%; height: 300px;
}
.scan-title {
  text-align: center;
}
.scan-main, .scan-meta {
  padding: 0 1em;
}
</style>
