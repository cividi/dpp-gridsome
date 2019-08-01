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
        path: 'scans/2019/4821/*.md',
        route: '/scan/:bfsid',
      }
    }
  ]
}
