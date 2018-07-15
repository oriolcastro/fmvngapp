import React from 'react'
import SecondaryLayout from '../components/secondarylayout'
import NewEventsList from '../components/neweventslist'

const Favorites = () => (
  <SecondaryLayout headerTitle="Els meus preferits">
    <div className="fav--container">
      <NewEventsList showEvents="favs" />
    </div>
  </SecondaryLayout>
)

export default Favorites
