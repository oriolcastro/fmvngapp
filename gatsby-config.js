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
    'gatsby-plugin-offline',
  ],
}
