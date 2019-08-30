<template lang="pug">
layout
  i-layout
    i-layout-header.scan-header
      h1.scan-title
        | {{ $page.package.title }}
      p {{ $page.package.format }}
</template>

<script>
export default {
  components: {

  },
  metaInfo () {
    return {
      title: this.$page.name,
      meta: []
    }
  }
}
</script>

<page-query>
query Package ($path: String!) {
  package: package (path: $path) {
    name
    title
    format
  }
}
</page-query>
