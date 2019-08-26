// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

const {Package} = require('datapackage')

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  // Server API: https://gridsome.org/docs/server-api/
  // api.chainWebpack((config, { isServer }) => {})

  // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  api.loadSource(async store => {
    const contentType = store.addContentType({
      typeName: 'Package',
      route: '/dp/:name'
    })

    const { resources } = await Package.load('content/gemeindescan-huettwilen/datapackage.json')

    for (const item of resources) {
      if (!item.valid) throw Exception(item.errors)
      if (!item.tabular) continue
      await item.read()
      contentType.addNode({
        id: item.id,
        name: item.name,
        url: (item.path ? item.path : item.url)
      })
    }
  })

  // Use the Pages API here: https://gridsome.org/docs/pages-api
  // api.createPages(({ createPage }) => {})

}
