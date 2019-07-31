<template>
  <div class="scan-card content-box">
    <div class="scan-card__header">
      <g-image alt="Cover image" v-if="scan.preview.image" class="scan-card__image" :src="scan.preview.image" />
    </div>
    <div class="scan-card__content">
      <h2 class="scan-card__title" v-html="scan.title" />
      <g-link class="scan-card__link" :to="scan.path">Scan</g-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['scan'],
}
</script>
