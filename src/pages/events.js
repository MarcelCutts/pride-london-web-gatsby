import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import EventListingCard from '../components/EventListingCard'

export default class Events extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: props.data.allContenfulEvents.edges,
    }
  }

  render() {
    return (
      <div>
        <h1>Hi from the events page</h1>
        <Link to="/">Go back to the homepage</Link>
        {this.state.events.map(event => (
          <EventListingCard
            title={event.node.title}
            id={event.node.id}
            key={event.node.id}
          />
        ))}
      </div>
    )
  }
}

Events.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export const EventsQuery = graphql`
  query EventsQuery {
    allContentfulEvent(filter: {}) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
