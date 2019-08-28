let tree = {
  label: 'CH',
    nodes: [
      {
        label: 'Aargau',
        nodes: [
          {
            label: 'Hüttenwiler'
          },
          {
            label: 'Grosswangen',
            nodes: [
              {
                label: 'Study 1'
              }
            ]
          }
        ]
      },
      { label: 'Bern' },
      { label: 'Zürich' }
    ]
}

import ScanCard from '~/components/ScanCard.vue'

export default {
  components: {
    ScanCard
  },
  data () {
    return { tree }
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
