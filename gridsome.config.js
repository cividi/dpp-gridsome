// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gemeindescan',
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
  }
}
