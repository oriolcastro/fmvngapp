import { createStore } from 'redux'
import rootReducer from './index'

export default () => {
  const devtools =
    process.env.NODE_ENV === 'development' && window.devTooldsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  return createStore(rootReducer, devtools)
}
// const reducer = (state, action) => {
//   if (action.type === `CHANGE_SELECTION`) {
//     return Object.assign({}, state, {
//       selection: state.selection,
//     })
//   }
//   return state
// }
//
// const initialState = { selection: 'Tots' }
//
// const createStore = () => reduxCreateStore(reducer, initialState)
// export default createStore
