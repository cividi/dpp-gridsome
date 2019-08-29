import ScanCard from '~/components/ScanCard.vue'
import MapView from '~/components/MapView.vue'

export default {
  components: {
    ScanCard,
    MapView
  },
  metaInfo () {
    return {
      title: this.$page.scan.title,
      meta: [
        {
          name: 'author',
          content: this.$page.scan.author
        },{
          name: 'updated',
          content: this.$page.scan.updated
        }
      ]
    }
  }
}
