import React, { Component } from 'react'
import { Paper } from 'react-md'
import EventItem from './eventitem'
import { getAllEventsFromDb, deleteEventFromDb } from '../db/events'

export default class FavEventsList extends Component {
  //Unify the list from favs and programa. Use component logic and props to choose what to render.
  constructor() {
    super()
    this.state = {
      events: [],
    }
    this.deleteEvent = this.deleteEvent.bind(this)
  }

  componentDidMount() {
    this.loadEvents()
  }

  loadEvents() {
    getAllEventsFromDb().then(events => this.setState({ events: events }))
  }

  deleteEvent(event) {
    deleteEventFromDb(event)
  }

  render() {
    return (
      <div className="eventlist">
        <Paper zDepth={0} className="eventlist--paper">
          {this.state.events.map((e, i) => (
            <EventItem
              time={e.time}
              title={e.title}
              info={e.info}
              day={e.day}
              apiid={e.apiid}
              key={i}
              handleDeleteEvent={this.deleteEvent}
            />
          ))}
        </Paper>
      </div>
    )
  }
}
