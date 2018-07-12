import React, { Component } from 'react'
import { BottomNavigation, FontIcon } from 'react-md'
import { Link } from 'gatsby'

const links = [
  {
    label: 'Activitats',
    icon: <FontIcon>event</FontIcon>,
    to: '/',
    component: Link,
  },
  {
    label: 'Preferits',
    icon: <FontIcon>favorite</FontIcon>,
    to: '/preferits',
    component: Link,
  },
  {
    label: 'Sobre',
    icon: <FontIcon>info</FontIcon>,
    to: '/info',
    component: Link,
  },
]

class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <BottomNavigation dynamic links={links} colored />
      </div>
    )
  }
}

export default Navigation
