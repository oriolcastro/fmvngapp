import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import MainHeader from './mainheader'
import Navigation from './navigation'
import '../styles/main.sass'

const MainLayout = ({ children }) => (
  <>
    <Helmet
      title="Hola"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <MainHeader siteTitle="Hola" />
    <div className="maincontent">{children}</div>
    <Navigation />
  </>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
