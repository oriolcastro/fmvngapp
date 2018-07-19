import React from 'react'
import { graphql } from 'gatsby'
import MainLayout from '../components/mainlayout'
import EventsList from '../components/eventslist'
import { connect } from 'react-redux'

const IndexPage = ({ data, selection }) => {
  return (
    <MainLayout>
      {data.allStrapiEventlist.edges.map(({ node }, id) => (
        <div>
          {selection === 'Tots els dies' ? (
            <EventsList
              day={node.Day}
              list={node.events}
              showFavs={false}
              key={node.id}
            />
          ) : (
            <div>
              {selection === node.Title && (
                <EventsList
                  day={node.Day}
                  list={node.events}
                  showFavs={false}
                  key={node.id}
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
          id
          Day(formatString: "dddd DD MMMM", locale: "ca")
          Title
          events {
            id
            Title
            Time
            Info
            Day(formatString: "dddd DD", locale: "ca")
            isFav
          }
        }
      }
    }
  }
`
