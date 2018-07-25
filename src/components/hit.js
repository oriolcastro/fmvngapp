import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Cell, Paper } from 'react-md'

const Hit = props => {
  const { hit } = props
  return (
    <>
      <Paper zDepth={1}>
        <Grid>
          <Cell className="eventitem--header">
            <h3 className="eventitem--time">
              <span>{hit.Day} -</span> {hit.Time}
            </h3>
          </Cell>
          <Cell className="eventitem--content">
            <h2>{hit.Title}</h2>
            <p className="eventitem--info">{hit.Info}</p>
          </Cell>
        </Grid>
      </Paper>
    </>
  )
}
Hit.propTypes = {
  hit: PropTypes.object.isRequired,
}

export default Hit
