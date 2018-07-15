import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Cell, Button, Divider } from 'react-md'
import { Event } from '../model/event'

class EventItem extends Component {
  constructor() {
    super()
    this.state = { isFav: false }
    this.newEvent = new Event()
    this.addEvent = this.addEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
    this.onClickBtn = this.onClickBtn.bind(this)
  }

  onClickBtn() {
    if (this.state.isFav === true) {
      this.deleteEvent()
    } else {
      this.addEvent()
    }
  }

  addEvent() {
    const event = new Event()
    event.apiid = this.props.apiid
    event.title = this.props.title
    event.time = this.props.time
    event.day = this.props.day
    event.info = this.props.info
    this.props.addHandler(event)
    this.setState({ isFav: true })
  }

  deleteEvent() {
    this.props.deleteHandler(this.props.apiid)
    this.setState({ isFav: false })
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell className="eventitem--header">
            <h3 className="eventitem--time">{this.props.time}</h3>
            <Button
              icon
              disabled={this.state.isFav ? false : true}
              secondary
              onClick={this.onClickBtn}
            >
              favorite
            </Button>
          </Cell>
          <Cell>
            <h2>{this.props.title}</h2>
            <p className="eventitem--info">{this.props.info}</p>
          </Cell>
        </Grid>
        <Divider />
      </div>
    )
  }
}

EventItem.propTypes = {
  apiid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
}

// const EventItem = props => (
//   <div>
//     <Grid>
//       <Cell className="eventitem--header">
//         <h3 className="eventitem--time">{props.time}</h3>
//         <Button icon disabled secondary>
//           favorite
//         </Button>
//       </Cell>
//       <Cell>
//         <h2>{props.title}</h2>
//         <p className="eventitem--info">{props.info}</p>
//       </Cell>
//     </Grid>
//     <Divider />
//   </div>
// )

export default EventItem
