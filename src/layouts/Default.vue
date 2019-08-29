<template lang="pug">
#app
  i-navbar(variant='cividi')
    i-navbar-brand(to="/")
      b {{ $static.metaData.siteName }}
    i-navbar-items
      i-nav
        i-nav-item(to="/") Beta
        i-nav-item(to="/about") Help
        i-nav-item(to="mailto:support@cividi.ch") Contact
  slot
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
.navbar.-cividi{
  .brand, a {
    color: white !important;
  }
  background: #543076;
  background: #483583 url(../../static/assets/logo.png) no-repeat right;
  background-size: contain;
}
</style>
