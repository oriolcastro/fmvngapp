import React from 'react'

import { Toolbar } from 'react-md'
import ToolbarMenu from './toolbarmenu'

const Header = () => (
  <div>
    <Toolbar
      colored
      fixed={true}
      titleMenu={<ToolbarMenu id="toolbar-title-menu" />}
    />
  </div>
)

export default Header
