<template lang="pug">
a(:href='scan.path', :title='scan.title', :id='scan.id', class="scancard")
  i-button(outline, :variant="current && scan.title==current.title ? 'primary' : 'default'")
    g-image.scan-card__image(v-if='scan.preview', :src='scan.preview')
    br
    span {{ scan.title }}
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
a.scancard button {
  width: 100%;
  text-align: left;
}
a.scancard span { color: black; width: 100%; }
a.scancard img { margin-right:1em; width:30% }
.collapsible .item .icon { display: none !important }
</style>
