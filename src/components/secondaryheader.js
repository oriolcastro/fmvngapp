import React, { Component } from 'react'
import { Toolbar, SelectField } from 'react-md'

import ToolbarMenu from './toolbarmenu'
import InstallBtn from './installbtn'

const SecondaryHeader = ({
  selection,
  changeSelection,
  menuItems,
  siteTitle,
}) => (
  <div>
    <Toolbar
      colored
      fixed={true}
      title={siteTitle}
      id="toolbar-title-menu"
      actions={<InstallBtn />}
    />} />
  </div>
)

export default SecondaryHeader
