import React from 'react'

const ResultElement = hit => (
  <div>
    <h4>{hit.Title}</h4>
    <p>{hit.Info}</p>
  </div>
)

export default ResultElement
