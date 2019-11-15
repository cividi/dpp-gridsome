<template src="./Scan.pug" />

<script src="./Scan.js" />

<page-query>
query Scan ($path: String!) {
  scan: scan (path: $path) {
    name
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
.scan-rendering, .scan-content {
  img { width: 100%; }
  iframe {
    width: 100%; height: 300px;
  }
}
.scans {
  text-align: center;
  a {
    display: block;
  }
}
.scan-title {
  text-align: center;
}
.scan-main, .scan-meta {
  padding: 0 1em;
}
.scan-meta tr:first-child > * {
  border-top: none;
}
.scan-meta .card {
  margin-bottom: 1em;
}
</style>
