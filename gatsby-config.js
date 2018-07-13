const config = require('./meta/config')
require('dotenv').config()

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
        name: config.siteTitle,
        short_name: config.siteShortName,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: config.displayMode,
        icon: '/icons/icon.png',
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL || ``,
        contentTypes: [`event`, `eventlist`, `user`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: process.env.STRAPI_USER || '',
          password: process.env.STRAPI_PASSWORD || '',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
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
    'gatsby-plugin-offline',
  ],
}
