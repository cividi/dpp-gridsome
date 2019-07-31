<template>
  <Layout>
    <div class="scan-header">
      <g-image alt="Cover image" v-if="$page.scan.preview" :src="$page.scan.preview" />
    </div>

    <h1 class="scan-title">
      {{ $page.scan.title }}
    </h1>

    <div class="scan-meta">
      <div class="scan-updated">
        Updated: <em>{{ $page.scan.updated }}</em>
      </div>
      <div class="scan-object">
        BFS-ID: <em>{{ $page.scan.object.bfsid }}</em>
      </div>
    </div>

    <div class="scan content-box">
      <div class="scan-map">
        <iframe :src="$page.scan.object.map_url" frameborder="0"></iframe>
      </div>

      <div class="scan-content" v-html="$page.scan.content" />
    </div>

    <div class="scan-footer">
      <div class="scan-author">
        Author: <em>{{ $page.scan.author }}</em>
      </div>
      <h2>Quellen</h2>
      <ul>
        <li>BFS</li>
        <li v-for="cat in $page.scan.categories">
          {{ $cat }}
        </li>
      </ul>
    </div>

    <Author class="post-author" />
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
    categories
    object {
      bfsid
      name
      type
      area
      perim
      lod_url
      map_url
    }
    preview
  }
}
</page-query>

<style lang="scss">
iframe {
  width: 100%; height: 300px;
}
</style>
