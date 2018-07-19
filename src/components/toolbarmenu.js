import React from 'react'
import PropTypes from 'prop-types'
import { SelectField } from 'react-md'
import { connect } from 'react-redux'
import { changeSelection as changeSelectionAction } from '../state/app'

const ToolbarMenu = ({ selection, changeSelection, props }) => (
  <SelectField
    {...props}
    defaultValue={selection}
    menuItems={['Tots', 'Dilluns 20', 'Dimarts 21']}
    onChange={value => changeSelection(value)}
  />
)

ToolbarMenu.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  toolbar: PropTypes.bool,
  position: PropTypes.string,
}

export default connect(
  state => ({ selection: state.app.selection }),
  dispatch => ({
    changeSelection: change => dispatch(changeSelectionAction(change)),
  })
)(ToolbarMenu)
