import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SelectField } from 'react-md'

class ToolbarMenu extends Component {
  constructor(props) {
    super(props)
    this.changeHandle = this.changeHandle.bind(this)
  }
  changeHandle(menuValue) {
    console.log(menuValue)
    this.props.callbackToolbarMenu(menuValue)
  }
  render() {
    return <SelectField {...this.props} onChange={this.changeHandle} />
  }
}

ToolbarMenu.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  toolbar: PropTypes.bool,
  position: PropTypes.string,
}

ToolbarMenu.defaultProps = {
  defaultValue: 'Tots',
  menuItems: ['Tots', 'Dilluns 20', 'Dimarts 21'],
}
export default ToolbarMenu
