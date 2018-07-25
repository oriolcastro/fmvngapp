import React from 'react'
import { Toolbar, SelectField, Button } from 'react-md'
import { connect } from 'react-redux'
import { changeSelection as changeSelectionAction } from '../state/app'
import { toogleSearch as toogleSearchAction } from '../state/search'
import InstallBtn from './installbtn'

const MainHeader = ({
  selection,
  changeSelection,
  menuItems,
  toogleSearch,
  showSearch,
}) => (
  <div>
    <Toolbar
      colored
      fixed={true}
      titleMenu={
        <SelectField
          value={selection}
          menuItems={menuItems}
          id="toolbar-title-menu"
          onChange={value => {
            changeSelection(value)
          }}
        />
      }
      actions={
        <div>
          {showSearch ? (
            <Button
              icon
              secondary
              onClick={() => {
                toogleSearch()
              }}
            >
              close
            </Button>
          ) : (
            <Button
              icon
              secondary
              onClick={() => {
                toogleSearch()
              }}
            >
              search
            </Button>
          )}

          <InstallBtn />
        </div>
      }
    />
  </div>
)

export default connect(
  state => ({
    selection: state.app.selection,
    menuItems: state.app.menuItems,
    showSearch: state.search.showSearch,
  }),
  dispatch => ({
    changeSelection: change => dispatch(changeSelectionAction(change)),
    toogleSearch: () => dispatch(toogleSearchAction()),
  })
)(MainHeader)
