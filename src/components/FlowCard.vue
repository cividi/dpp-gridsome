<template lang="pug">
a(:href='flow.path', :title='flow.title', :id='flow.id', class="flowcard")
  i-button(outline)
    span {{ flow.title }}
  p
    small {{ flow.updated }} / {{ flow.author }}
</template>

<script>
export default {
  components: {
  },
  props: ['flow'],
}
</script>

<style lang="scss">
a.flowcard {
  vertical-align: top;
}
a.flowcard span { color: black; }
</style>
