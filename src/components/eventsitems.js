import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Cell, Button, Divider, Paper } from 'react-md'

class EventsItems extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.btnClicked(event)
  }

  render() {
    return (
      <Paper zDepth={0} className="eventsitems--paper">
        {this.props.events.map(event => (
          <div key={event.id}>
            <Grid>
              <Cell className="eventitem--header">
                <h3 className="eventitem--time">
                  {this.props.showFavs && <span>{event.Day} -</span>}{' '}
                  {event.Time}
                </h3>
                <Button
                  icon
                  className={`eventitem--fav${event.isFav}`}
                  onClick={() => this.handleClick(event)}
                >
                  favorite
                </Button>
              </Cell>
              <Cell className="eventitem--content">
                <h2>{event.Title}</h2>
                <p className="eventitem--info">{event.Info}</p>
              </Cell>
            </Grid>
            <Divider />
          </div>
        ))}
      </Paper>
    )
  }
}

export default EventsItems
