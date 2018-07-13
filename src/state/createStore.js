import { createStore } from 'redux'
import rootReducer from './index'

export default () => {
  return createStore(rootReducer)
}
