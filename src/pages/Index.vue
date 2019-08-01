<template>
  <Layout>

    <g-image alt="Logo" src="~/assets/logo/logo.png" width="135" />

    <h1>Gemeindescan</h1>

    <div class="scans">
      <ScanCard v-for="edge in $page.scans.edges" :key="edge.node.id" :scan="edge.node"/>
    </div>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<page-query>
{
  scans: allScan {
    edges {
      node {
        id
        title
        path
        preview
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
    title: 'Scancentral'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
