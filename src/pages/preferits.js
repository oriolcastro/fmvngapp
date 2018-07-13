import React from 'react'
import { FontIcon } from 'react-md'
import SecondaryLayout from '../components/secondarylayout'

const Favorites = ({}) => (
  <SecondaryLayout headerTitle="Preferits">
    <div className="fav--container">
      <h1>Activitats preferides</h1>
      <p>
        Aquí podràs guardar les teves activitats preferides de la Festa Major
        per a tenir-les sempre a ma
      </p>
      <FontIcon>star</FontIcon>
    </div>
  </SecondaryLayout>
)

export default Favorites
