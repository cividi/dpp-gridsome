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

body {
  font-family: "Zilla Slab";
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
