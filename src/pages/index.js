import React from 'react'
import { graphql } from 'gatsby'
import MainLayout from '../components/mainlayout'
import EventList from '../components/eventlist'
import NewEventsList from '../components/neweventslist'
import { connect } from 'react-redux'

const IndexPage = ({ data, selection }) => {
  return (
    <MainLayout>
      {data.allStrapiEventlist.edges.map(({ node }, i) => (
        <div>
          {selection === 'Tots els dies' ? (
            <NewEventList
              key={i}
              day={node.Day}
              events={node.events}
              showEvents="all"
            />
          ) : (
            <div>
              {selection === node.Title && (
                <NewEventList
                  key={i}
                  day={node.Day}
                  events={node.events}
                  showEvents="all"
                />
              )}
            </div>
          )}
        </div>
      ))}
    </MainLayout>
  )
}

export default connect(state => ({
  selection: state.app.selection,
}))(IndexPage)

export const query = graphql`
  query IndexQuery {
    allStrapiEventlist {
      edges {
        node {
          Day(formatString: "dddd DD MMMM", locale: "ca")
          Title
          events {
            Id
            Title
            Time
            Info
          }
        }
      }
    }
  }
`
