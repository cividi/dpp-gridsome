import ScanCard from '~/components/ScanCard.vue'
import FlowCard from '~/components/FlowCard.vue'
import MapboxView from '~/components/MapboxView.vue'

export default {
  components: {
    ScanCard,
    FlowCard,
    MapboxView
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
