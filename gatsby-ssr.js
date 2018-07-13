/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

//You can delete this file if you're not using it

import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import createStore from './src/state/createStore'

exports.replaceRenderer = ({ bodyComponent, repladeBodyHTMLString }) => {
  const store = createStore()

  const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
