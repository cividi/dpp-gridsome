<template lang="pug">
a(:href='scan.path', :title='scan.title', :id='scan.id', class="scancard")
  i-button(outline, :variant="current && scan.title==current.title ? 'primary' : 'default'")
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
a.scancard {
  vertical-align: top;
}
a.scancard span { color: black; }
.collapsible .item .icon { display: none !important }
</style>
