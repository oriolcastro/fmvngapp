const TOOGLE_SEARCH = `TOOGLE_SEARCH`
export const toogleSearch = () => ({
  type: TOOGLE_SEARCH,
})

function toogleS(state) {
  var newState = Object.assign({}, state)
  newState.showSearch = !newState.showSearch
  return newState
}

export default (state = {}, action) => {
  const { type } = action
  switch (type) {
    case TOOGLE_SEARCH:
      return toogleS(state)
  }
  return state
}
