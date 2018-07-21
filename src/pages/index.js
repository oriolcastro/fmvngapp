import React from 'react'
import { graphql } from 'gatsby'
import { connect } from 'react-redux'
import MainLayout from '../components/mainlayout'
import EventsList from '../components/eventslist'
import Search from '../components/search'

const IndexPage = ({ data, selection }) => {
  return (
    <MainLayout>
      <Search />
      {data.allStrapiEventlist.edges.map(({ node }, id) => (
        <div>
          {selection === 'Tots els dies' ? (
            <EventsList
              day={node.Day}
              events={node.events}
              showFavs={false}
              key={node.id}
            />
          ) : (
            <div>
              {selection === node.Title && (
                <EventsList
                  day={node.Day}
                  events={node.events}
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
