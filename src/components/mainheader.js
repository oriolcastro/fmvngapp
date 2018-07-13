import React, { Component } from 'react'
import { Toolbar, SelectField } from 'react-md'
import { connect } from 'react-redux'
import { changeSelection as changeSelectionAction } from '../state/app'
import ToolbarMenu from './toolbarmenu'
import InstallBtn from './installbtn'

const MainHeader = ({ selection, changeSelection, menuItems }) => (
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
      actions={<InstallBtn />}
    />
  </div>
)

export default connect(
  state => ({
    selection: state.app.selection,
    menuItems: state.app.menuItems,
  }),
  dispatch => ({
    changeSelection: change => dispatch(changeSelectionAction(change)),
  })
)(MainHeader)
