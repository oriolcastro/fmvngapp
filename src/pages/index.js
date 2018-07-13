import React from 'react'
import { graphql } from 'gatsby'
import MainLayout from '../components/mainlayout'
import EventList from '../components/eventlist'
import { connect } from 'react-redux'

const IndexPage = ({ data, selection }) => {
  return (
    <MainLayout>
      {data.allStrapiEventlist.edges.map(({ node }, i) => (
        <div>
          {selection === 'Tots' ? (
            <EventList key={i} day={node.Day} events={node.events} />
          ) : (
            <div>
              {selection === node.Title && (
                <EventList key={i} day={node.Day} events={node.events} />
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
            Title
            Time
            Info
          }
        }
      }
    }
  }
`
