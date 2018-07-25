import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { FontIcon, Divider } from 'react-md'
import {
  InstantSearch,
  SearchBox,
  Hits,
  PoweredBy,
  Configure,
  connectStateResults,
} from 'react-instantsearch-dom'

import Hit from './hit'

const Search = props => {
  const { algolia } = props
  const Content = connectStateResults(
    ({ searchState }) =>
      searchState && searchState.query ? (
        <div>
          <h2>Resultats</h2>
          <Hits hitComponent={Hit} />
        </div>
      ) : (
        <h3>Que estas buscant?</h3>
      )
  )

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css"
        />
      </Helmet>

      <InstantSearch
        indexName={algolia.indexName}
        appId={algolia.appId}
        apiKey={algolia.searchOnlyApiKey}
      >
        <SearchBox
          translations={{ placeholder: 'Cerca' }}
          reset={<FontIcon />}
          autofocus={true}
        />

        <Configure hitsPerPage={3} />
        <Content />
        <PoweredBy translations={{ searchBy: 'Ofert per' }} />
      </InstantSearch>
      <Divider className="search-divider" />
    </>
  )
}

Search.propTypes = {
  algolia: PropTypes.object.isRequired,
}

export default Search
