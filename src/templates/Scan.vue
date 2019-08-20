<template>
  <Layout>
    <div class="scan-header">
      <h1 class="scan-title">
        {{ $page.scan.title }}
      </h1>
    </div>

    <div class="scan-rendering">
      <div v-if="$page.scan.map_url" class="scan-map">
        <iframe :src="$page.scan.map_url" frameborder="0"></iframe>
      </div>
      <g-image v-else-if="$page.scan.preview"
        :src="$page.scan.preview" />
      <div v-else>
        <i>Rendering not available.</i>
      </div>
    </div>

    <div class="scan-meta">
      <ul class="scan-details">
        <li><span>Author</span> <em>{{ $page.scan.author }}</em></li>
        <li><span>Updated</span> <em>{{ $page.scan.updated }}</em></li>
      </ul>
      <ul class="scan-object">
        <li><span>Object</span> <em>{{ $page.scan.object.name }}</em></li>
        <li><span>Type</span> <em>{{ $page.scan.object.type }}</em></li>
        <li><span>Area</span> <em>{{ $page.scan.object.area }}</em></li>
        <li><span>Perimeter</span> <em>{{ $page.scan.object.perimeter }}</em></li>
        <li><span>Resolution</span> <em>{{ $page.scan.object.resolution }}</em></li>
      </ul>
      <div class="scan-categories">
        <span>Categories</span>
        <ul>
          <li v-for="ctg in $page.scan.category">{{ ctg }}</li>
        </ul>
      </div>
    </div>

    <div class="scan-content" v-html="$page.scan.content" />

  </Layout>
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

<style lang="scss">
iframe {
  width: 100%; height: 300px;
}
</style>
