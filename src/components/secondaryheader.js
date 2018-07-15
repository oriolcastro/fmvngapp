import React from 'react'
import { Toolbar } from 'react-md'

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
    />
  </div>
)

export default SecondaryHeader
