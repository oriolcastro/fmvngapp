const initialState = {
  selection: 'Tots els dies',
  menuItems: [
    'Tots els dies',
    'Divendres 20',
    'Dissabte 21',
    'Diumenge 22',
    'Dilluns 23',
    'Dimarts 24',
    'Dimecres 25',
    'Dijous 26',
    'Divendres 27',
    'Dissabte 28',
    'Diumenge 29',
    'Dilluns 30',
    'Dimarts 31',
    'Dimecres 1',
    'Dijous 2',
    'Divendres 3',
    'Dissabte 4',
    'Diumenge 5',
    'Dilluns 6',
  ],
}

const CHANGE_SELECTION = `CHANGE_SELECTION`
export const changeSelection = change => ({
  type: CHANGE_SELECTION,
  payload: change,
})

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_SELECTION:
      return { ...state, selection: payload }
    default:
      return state
  }
}
