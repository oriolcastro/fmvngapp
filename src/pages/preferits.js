import React from 'react'
import { FontIcon } from 'react-md'
import SecondaryLayout from '../components/secondarylayout'

const Favorites = ({}) => (
  <SecondaryLayout headerTitle="Els meus preferits">
    <div className="fav--container">
      <p>
        Aquí podràs guardar les teves activitats preferides de la Festa Major
        per a tenir-les sempre a ma
      </p>
    </div>
  </SecondaryLayout>
)

export default Favorites
