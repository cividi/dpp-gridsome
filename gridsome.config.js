// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const path = require('path')

// Changes here require a server restart.

module.exports = {
  siteName: 'Gemeindescan',
  siteDescription: 'The SmartUse Gemeindescan Frontend.',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Scan',
        path: 'content/**/project.md',
        route: '/p/:name',
      }
    },{
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Package',
        path: 'content/**/datapackage.json',
        route: '/dp/:name',
      }
    }
  ],
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'vue-mapbox': path.resolve(__dirname, 'node_modules/vue-mapbox/dist/vue-mapbox.umd.min.js'),
        'mapbox-gl': path.resolve(__dirname, 'node_modules/mapbox-gl/dist/mapbox-gl-unminified.js'),
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('pug')
        .test(/\.pug$/)
        .use('pug-plain-loader')
          .loader('pug-plain-loader')
        .end()
      .end()
      .rule('geojson')
        .test(/\.geojson/)
        .use('json-loader')
          .loader('json-loader')
        .end()
      .end()
      // .rule('mapbox-gl-build')
      //   .test(/mapbox-gl/)
      //   .use('null-loader')
      //     .loader('null-loader')
      //   .end()
      // .end()
      /*
      .rule('md')
        .test(/\.md/)
        .use('vue-loader')
          .loader('vue-loader')
        .end()
        .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
            raw: true
          })
          */
  }
}
