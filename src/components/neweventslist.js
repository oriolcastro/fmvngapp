import React, { Component } from 'react'
import { Paper } from 'react-md'
import { Event } from '../model/event'
import { EventsService } from '../service/events_service'
import EventItem from './eventitem'

export default class NewEventsList extends Component {
  constructor() {
    super()
    this.service = new EventsService()
    this.state = {
      events: [],
    }
    this.loadEventsFromDb()
    this.addEvent = this.addEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
  }

  loadEventsFromDb() {
    this.service
      .getEvents()
      .then(events => {
        this.setState({ events: events })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addEvent(event) {
    this.service
      .addEvent(event)
      .then(records => {
        if (records.length > 0) {
          this.state.events.push(records[0])
          this.setState({ event: this.state.events }) //Check error event instead of events
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteEvent(apiid) {
    this.service
      .removeEvent(apiid)
      .then(recordDeleted => {
        if (recordDeleted > 0) {
          const index = this.state.events.findIndex(
            event => event.apiid === apiid
          )
          this.state.students.splice(index, 1)
          this.setState({ event: this.state.events }) //Check error event instead of events
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateEvent() {
    //The data for the events is not updated in the client
  }

  render() {
    return (
      <div>
        {this.props.showEvents === 'all' ? (
          <div className="eventlist">
            <h1 className="eventlist--title">{this.props.day}</h1>
            <Paper zDepth={0} className="eventlist--paper">
              {this.props.events.map((e, i) => (
                <EventItem
                  time={e.Time}
                  title={e.Title}
                  info={e.Info}
                  apiid={e.id}
                  day={this.props.day}
                  key={i}
                  addHandler={this.addEvent}
                  deleteHandler={this.deleteEvent}
                />
              ))}
            </Paper>
          </div>
        ) : (
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
                  addHandler={this.addEvent}
                  deleteHandler={this.deleteEvent}
                />
              ))}
            </Paper>
          </div>
        )}
      </div>
    )
  }
}
