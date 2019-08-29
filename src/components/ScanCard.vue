<template lang="pug">
a(:href='scan.path', :title='scan.title', :id='scan.id')
  i-button(outline, :variant="current && scan.name==current.name ? 'primary' : 'dark'")
    span {{ scan.title }}
    br
    g-image.scan-card__image(v-if='scan.preview', :src='scan.preview', style="width:100%")
</template>

<script>
export default {
  components: {
  },
  props: ['scan', 'current'],
}
</script>

<style lang="scss">
.collapsible .item .icon { display: none !important }
</style>
