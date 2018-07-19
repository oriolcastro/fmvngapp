import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Cell, FontIcon } from 'react-md'
import EventsItems from './eventsitems'
import { onRouteUpdate } from '../../gatsby-browser'
import {
  deleteEventFromDb,
  addEventToDb,
  getAllEventsFromDb,
} from '../db/events'

class EventsList extends Component {
  constructor(props) {
    super(props)
    this.state = { events: props.events }
    this.addEvent = this.addEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
    this.loadFavEvents = this.loadFavEvents.bind(this)
    this.btnClicked = this.btnClicked.bind(this)
  }
  componentDidMount() {
    this.loadFavEvents()
  }

  componentDidUpdate() {
    let e = onRouteUpdate
    console.log(e)
    if (e === true) {
      console.log(e)
      this.loadFavEvents()
    }
  }

  loadFavEvents() {
    if (this.props.showFavs === true) {
      getAllEventsFromDb().then(events => this.setState({ events: events }))
    } else {
      getAllEventsFromDb().then(favs => {
        if (favs.length === 0) {
          return
        } else {
          let ev = [...this.state.events]
          favs.forEach(arrayItem => {
            let index = ev.findIndex(x => x.id === arrayItem.id)
            if (index >= 0) {
              ev[index].isFav = 'true'
            }
          })
          this.setState({ events: ev })
        }
      })
      return
    }
    return
  }

  btnClicked = a => {
    console.log(a.isFav)
    if (a.isFav === 'true') {
      console.log('The event you click is fav')
      this.deleteEvent(a)
    } else {
      this.addEvent(a)
    }
  }

  addEvent(c) {
    addEventToDb(c)
    let ev = [...this.state.events]
    let index = ev.findIndex(x => x.id === c.id)
    ev[index].isFav = 'true'
    this.setState({ events: ev })
  }

  deleteEvent(b) {
    deleteEventFromDb(b.id)
    let ev = [...this.state.events]
    let index = ev.findIndex(x => x.id === b.id)
    ev[index].isFav = 'false'
    if (this.props.showFavs === true) {
      ev.splice(index, 1)
      this.setState({ events: ev })
    } else {
      ev[index].isFav = false
      this.setState({ events: ev })
    }
  }

  render() {
    console.log('List is rendered')
    if (onRouteUpdate === true) {
      this.loadFavEvents()
    }
    return (
      <div className="eventslist">
        <h1 className="eventslist--title">{this.props.day}</h1>
        {this.state.events.length > 0 ? (
          <EventsItems
            events={this.state.events}
            btnClicked={this.btnClicked}
            showFavs={this.props.showFavs}
          />
        ) : (
          <Grid>
            <Cell>
              <h3 className="eventslist--emptymessage">
                La teva llista de preferits està buida.
              </h3>
              <div className="eventslist--emptyicon">
                <FontIcon forceSize={80} forceFontSize={true} secondary>
                  favorite
                </FontIcon>
              </div>
            </Cell>
          </Grid>
        )}
      </div>
    )
  }
}

EventsList.propTypes = {
  day: PropTypes.string,
  showFavs: PropTypes.bool,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      time: PropTypes.string,
      info: PropTypes.string,
      isFav: PropTypes.string,
    })
  ),
}

export default EventsList
