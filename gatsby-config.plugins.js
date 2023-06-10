const config = require('./config')

module.exports = [
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-less',
  
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'Josphat Mutuku Blog',
      short_name: 'Josphat Mutuku',
      start_url: '/',
      background_color: '#0C2744',
      theme_color: '#0C2744',
      display: 'standalone',
      icon: 'src/images/icon.png', // This path is relative to the root of the site.
      legacy: true, // this will add apple-touch-icon links to <head>. Required for versions prior to iOS 11.3.
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/content`,
    },
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [{
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1000,
            quality: 80,
            showCaptions: true,
            linkImagesToOriginal: false
          },
        },
        'gatsby-remark-prismjs',
        'gatsby-remark-copy-linked-files',
        'gatsby-plugin-catch-links' // for relative markdown files
      ]
    }
  },
  {
    resolve: 'gatsby-plugin-i18n',
    options: {
      langKeyDefault: config.defaultLanguage,
      useLangKeyLayout: false
    }
  },
]