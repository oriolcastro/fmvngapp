import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import {
  InstantSearch,
  SearchBox,
  Hits,
  PoweredBy,
  Configure,
} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch'
import ResultElement from './resultelement'

const Search = () => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css"
      />
    </Helmet>
    <InstantSearch
      indexName="events"
      appId="7P7M389DOK"
      apiKey="ce2c026a3290e5fefc25e76048f03feb"
    >
      <SearchBox />
      <Configure hitsPerPage={5} />
      <Hits hitComponent={ResultElement} />
      <PoweredBy />
    </InstantSearch>
  </>
)

export default Search
