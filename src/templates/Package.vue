<template lang="pug">
layout
  i-layout
    i-layout-header.scan-header
      h1.scan-title
        | {{ $page.package.name }}
      p {{ $page.package.url }}
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
  }
}
</page-query>
