<template lang="pug">
layout
  .scan-header
    h1.scan-title
      | {{ $page.scan.title }}
  .scan-rendering
    .scan-map(v-if='$page.scan.map_url')
      iframe(:src='$page.scan.map_url', frameborder='0')
    g-image(v-else-if='$page.scan.preview', :src='$page.scan.preview')
    div(v-else='')
      i Rendering not available.
  .scan-meta
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
  .scan-content(v-html='$page.scan.content')
</template>

<script>
export default {
  components: {
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
