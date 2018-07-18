import React from 'react'
import { Grid, Cell } from 'react-md'

import SecondaryLayout from '../components/secondarylayout'

const Information = () => (
  <SecondaryLayout headerTitle="Informació sobre l'app">
    <Grid>
      <Cell>
        <p>
          Informació sobre l'aplicació, sobre Ok Studio, links, web, xxss, i
          info meva
        </p>
      </Cell>
    </Grid>
  </SecondaryLayout>
)

export default Information
