import React from 'react'
import { Grid, Cell, Button, Divider } from 'react-md'

const EventItem = props => (
  <div>
    <Grid>
      <Cell className="eventitem--header">
        <h3 className="eventitem--time">{props.time}</h3>
        <Button icon disabled secondary>
          favorite
        </Button>
      </Cell>
      <Cell>
        <h2>{props.title}</h2>
        <p className="eventitem--info">{props.info}</p>
      </Cell>
    </Grid>
    <Divider />
  </div>
)

export default EventItem
