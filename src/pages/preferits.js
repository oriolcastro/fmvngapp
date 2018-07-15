import React from 'react'
import { FontIcon } from 'react-md'
import SecondaryLayout from '../components/secondarylayout'
import NewEventsList from '../components/neweventslist'

const Favorites = ({}) => (
  <SecondaryLayout headerTitle="Els meus preferits">
    <div className="fav--container">
      <NewEventsList showEvents="favs" />
    </div>
  </SecondaryLayout>
)

export default Favorites
