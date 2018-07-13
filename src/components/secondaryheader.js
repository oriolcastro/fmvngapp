import React, { Component } from 'react'
import { Toolbar, SelectField } from 'react-md'

import ToolbarMenu from './toolbarmenu'

const SecondaryHeader = ({
  selection,
  changeSelection,
  menuItems,
  siteTitle,
}) => (
  <div>
    <Toolbar colored fixed={true} title={siteTitle} id="toolbar-title-menu" />}
    />
  </div>
)

export default SecondaryHeader
