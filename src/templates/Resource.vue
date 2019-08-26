<template lang="pug">
layout
  i-layout
    i-layout-header.scan-header
      h1.scan-title
        | {{ $page.resource.name }}
      p {{ $page.resource.url }}
</template>

<script>
export default {
  components: {

  },
  metaInfo () {
    return {
      title: this.$page.resource.name,
      meta: []
    }
  }
}
</script>

<page-query>
query Resource ($path: String!) {
  resource: resource (path: $path) {
    name
  }
}
</page-query>
