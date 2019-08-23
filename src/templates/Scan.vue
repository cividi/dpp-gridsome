<template lang="pug">
layout
  i-layout
    i-layout-header.scan-header
      h1.scan-title
        | {{ $page.scan.title }}
    i-layout(vertical='')
      i-layout-aside
        treenav
      i-layout-content
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
import TreeNav from '~/components/TreeNav.vue'

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

export default {
  components: {
    TreeNav
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
  }
}
</page-query>

<style lang="scss" scoped>
iframe {
  width: 100%; height: 300px;
}
</style>
