<template lang="pug">
v-app
  v-toolbar
    v-toolbar-title {{ $static.metaData.siteName }}
    v-spacer
    v-toolbar-items
      v-btn(flat to="/") Home
      v-btn(flat to="/about") About
  v-navigation-drawer(v-model="left" fixed)
  v-container
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
