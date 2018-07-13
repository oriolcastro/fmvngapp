import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import MainHeader from './mainheader'
import Navigation from './navigation'
import '../styles/main.sass'
import Config from '../../meta/config'
import favicon from './img/favicon.ico'
const MainLayout = ({ children }) => (
  <>
    <Helmet>
      <title>{Config.siteTitle}</title>,
      <meta name="description" content={Config.siteDescription} />
      <meta name="keywords" content={Config.keywords} />
      <meta name="msapplication-TileColor" content={Config.themeColor} />
      <meta name="theme-color" content={Config.themeColor} />
      <meta property="og:locale" content="ca_ES" />
      <meta property="og:image" content="/img/og-image.jpg" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:width" content="576" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={Config.siteDescription} />
      <meta property="og:title" content={Config.siteTitle} />
      <meta property="og:url" content={Config.siteUrl} />
      <meta name="twitter:card" content="img/og-image.jpg" />
      <link rel="shortcut icon" href={favicon} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
      />
    </Helmet>

    <MainHeader />
    <div className="maincontent">{children}</div>
    <Navigation />
  </>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
