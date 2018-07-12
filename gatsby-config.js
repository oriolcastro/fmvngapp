const config = require('./meta/config')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://okstudio-fmvng18-backend.herokuapp.com`,
        contentTypes: [`event`, `eventlist`, `user`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: 'Oriol',
          password: 'ICaVIsHaNdLifIRECERp',
        },
      },
    },
  ],
}
