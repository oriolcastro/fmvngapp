import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import EventList from '../components/eventlist'

const IndexPage = ({ data }) => (
  <Layout>
    {data.allStrapiEventlist.edges.map(({ node }, i) => (
      <EventList key={i} day={node.Day} events={node.events} />
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allStrapiEventlist {
      edges {
        node {
          Day(formatString: "dddd DD MMMM", locale: "ca")
          MyDay: Day(formatString: "dddd DD", locale: "ca")
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
