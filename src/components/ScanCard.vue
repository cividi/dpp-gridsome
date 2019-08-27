<template lang="pug">
i-collapsible-item(:title='scan.title', :id='1')
  a(:href='scan.path')
    g-image.scan-card__image(v-if='scan.preview', :src='scan.preview')
</template>

<script>
export default {
  components: {
  },
  props: ['scan'],
}
</script>

<style lang="scss">
.collapsible .item .icon { display: none !important }
</style>
