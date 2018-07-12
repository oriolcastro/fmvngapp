import React from 'react'
import { Paper } from 'react-md'
import EventItem from './eventitem'

const EventList = props => (
  <div className="eventlist">
    <h1 className="eventlist--title">{props.day}</h1>
    <Paper zDepth={0} className="eventlist--paper">
      {props.events.map((e, i) => (
        <EventItem time={e.Time} title={e.Title} info={e.Info} key={i} />
      ))}
    </Paper>
  </div>
  // <StaticQuery
  //   query={graphql`
  //     query EventListQuery {
  //       allStrapiEvent {
  //         edges {
  //           node {
  //             Title
  //             Time
  //             Info
  //             NumDay
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={data => (
  //     <div className="eventlist">
  //       <h1>{props.day}</h1>
  //       <Paper zDepth={0} className="eventlist--paper">
  //         {data.allStrapiEvent.edges.map(({ node }, id) => {
  //           const dia = `${node.NumDay}`
  //           if (dia === `${props.numDay}`) {
  //             return (
  //               <EventItem
  //                 time={node.Time}
  //                 title={node.Title}
  //                 info={node.Info}
  //                 key={node.id}
  //               />
  //             )
  //           } else {
  //             return
  //           }
  //         })}
  //       </Paper>

  //     </div>
  //   )}
  // />
)

export default EventList
