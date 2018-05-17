import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import EventListingCard from './EventListingCard'
import { Consumer } from '../../components/AppContext'
import { Container, Row, Column } from '../../components/grid/grid'

const ViewAll = styled.a`
  color: ${props => props.theme.colors.indigo};
  display: block;
  font-family: ${props => props.theme.fonts.title};
  font-size: 0.8em;
  letter-spacing: 0.1px;
  padding-top: 5px;
  text-align: right;
  text-decoration: none;
  width: 100%;
`

const FlexColumn = styled(Column)`
  display: flex;
`

const filterEventsYouMayLike = (events, eventId) => {
  const filteredEvents = events.filter(event => {
    if (event.node.id === eventId) return false

    const timeNow = moment().format('LLLL')
    const eventStartTime = moment(event.node.startTime).format('LLLL')
    return moment(eventStartTime).diff(timeNow, 'days') > 0
  })

  return [
    filteredEvents[0].node,
    filteredEvents[1].node,
    filteredEvents[2].node,
  ]
}

const EventsYouMayLike = ({ eventId }) => (
  <Consumer>
    {({ state: { events } }) => {
      const eventsYouMayLike = filterEventsYouMayLike(events, eventId)
      return (
        <Container>
          <Row>
            <Column width={0.7}>
              <h2>You may also like</h2>
            </Column>
            <Column width={0.3}>
              <ViewAll href="../events/">View all events</ViewAll>
            </Column>
          </Row>
          <Row>
            {eventsYouMayLike.map(event => (
              <FlexColumn width={[1, 1 / 2, 1 / 3, 1 / 3]} key={event.id}>
                {' '}
                <EventListingCard event={event} />{' '}
              </FlexColumn>
            ))}
          </Row>
        </Container>
      )
    }}
  </Consumer>
)

EventsYouMayLike.propTypes = {
  eventId: PropTypes.string,
}

export default EventsYouMayLike