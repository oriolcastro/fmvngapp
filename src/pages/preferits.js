import React from 'react'
import SecondaryLayout from '../components/secondarylayout'
import EventsList from '../components/eventslist'

const Favorites = () => (
  <SecondaryLayout headerTitle="Els meus preferits">
    <div className="fav--container">
      <EventsList showFavs={true} list={[]} />
    </div>
  </SecondaryLayout>
)

export default Favorites
