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
        <h3>Que estàs buscant?</h3>
      )
  )

  return (
    <>
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
        <Divider className="search-divider" />
      </InstantSearch>
    </>
  )
}

Search.propTypes = {
  algolia: PropTypes.object.isRequired,
}

export default Search
