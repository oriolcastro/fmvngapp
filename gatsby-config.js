const config = require('./meta/config')
require('dotenv').config()

const query = `{
  allStrapiEvent {
    edges {
      node {
        objectID: id
        Title
        Info
      }
    }
  }
}`

const queries = [
  {
    query,
    transformer: ({ data }) =>
      data.allStrapiEvent.edges.map(({ node }) => node), // optional
    indexName: 'events', // overrides main index name, optional
  },
]

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Programa FMVng',
        short_name: 'FMVNG18',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#FFC107',
        display: 'standalone',
        icon: 'src/img/icon-512x512.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.MY_GOOGLE_ANALYTICS_TRACKING_ID || '',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: 'https://okstudio-fmvng18-backend.herokuapp.com',
        contentTypes: [`event`, `eventlist`, `user`],
        loginData: {
          identifier: process.env.STRAPI_USER || '',
          password: process.env.STRAPI_PASSWORD || '',
        },
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.MY_ALGOLIA_APP_ID || '',
        apiKey: process.env.MY_ALGOLIA_ADMIN_API_KEY || '',
        indexName: 'events', // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    'gatsby-plugin-offline',
  ],
}
