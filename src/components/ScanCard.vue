<template lang="pug">
v-card(max-width="400" class="mx-auto")
  a(:href='scan.path')
    v-card-title(v-html='scan.title')
    v-card-text
      g-image.scan-card__image(v-if='scan.preview', :src='scan.preview')
      v-btn(text) View
</template>

<script>
export default {
  components: {
  },
  props: ['scan'],
}
</script>

<style lang="scss">
  .v-card__text button {
    margin-top: 4em;
    float: right;
  }
</style>
