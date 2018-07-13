import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SecondaryHeader from './secondaryheader'
import Navigation from './navigation'
import '../styles/main.sass'

const SecondaryLayout = ({ children, headerTitle }) => (
  <>
    <Helmet
      title="Hola"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <SecondaryHeader siteTitle={headerTitle} />
    <div className="maincontent">{children}</div>
    <Navigation />
  </>
)

SecondaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SecondaryLayout
