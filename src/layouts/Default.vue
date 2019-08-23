<template lang="pug">
#app
  i-navbar(variant='dark')
    i-navbar-brand(to="/") {{ $static.metaData.siteName }}
    i-navbar-items
      i-nav
        i-nav-item(to="/") Home
        i-nav-item(to="/about") About
        i-nav-item(to="/contact") Contact
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
.v-toolbar {
  flex: none;
}
</style>
