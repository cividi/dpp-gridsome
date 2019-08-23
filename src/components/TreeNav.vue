<template lang="pug">
.tree-nav
  div {{ label }}
  tree-nav(
    v-for="node in nodes",
    :nodes="node.nodes",
    :label="node.label"
  )
</template>

<script>
export default {
  props: [ 'label', 'nodes' ],
  name: 'tree-nav'
}
</script>
