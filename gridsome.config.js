// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gemeindescan',
  siteDescription: 'The SmartUse Gemeindescan Frontend.',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Scan',
        path: 'content/**/project.md',
        route: '/p/:slug',
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
  }
}
