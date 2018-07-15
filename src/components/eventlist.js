import React from 'react'
import { Paper } from 'react-md'
import EventItem from './eventitem'

const EventList = props => (
  <div className="eventlist">
    <h1 className="eventlist--title">{props.day}</h1>
    <Paper zDepth={0} className="eventlist--paper">
      {props.events.map((e, i) => (
        <EventItem
          time={e.Time}
          title={e.Title}
          info={e.Info}
          apiid={e.Id}
          day={props.day}
          key={i}
        />
      ))}
    </Paper>
  </div>
)

export default EventList
