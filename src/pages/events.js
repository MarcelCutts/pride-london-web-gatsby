import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import { media } from '../theme/media'
import { EventListingCard } from '../templates/events'
import EventsFilters from '../templates/events/eventsFilters'
import ImageBanner from '../components/imageBanner'
import Button from '../components/button'
import { Container, Row, Column } from '../components/grid'
import { Consumer } from '../components/appContext'
import { filterByLimit } from '../templates/events/helpers'
import filterIcon from '../theme/assets/images/icon-filters.svg'
import noScroll from 'no-scroll'

const FlexColumn = styled(Column)`
  display: flex;
`

const ColumnTextCenter = styled(Column)`
  text-align: center;
`

const ColumnAddFilters = styled(Column)`
  text-align: center;

  ${media.tablet`
    display: none;
  `};
`

const EventCount = styled.p`
  font-size: 0.875rem;
  line-height: 1.214;
  color: ${props => props.theme.colors.darkGrey};
`

class Events extends Component {
  state = {
    showFiltersMobile: false,
  }

  toggleFiltersMobile = () => {
    const state = { ...this.state }
    state.showFiltersMobile = !state.showFiltersMobile
    this.setState(state)
    noScroll.toggle()
  }

  render() {
    return (
      <Consumer>
        {context => (
          <Fragment>
            <Container>
              <Row>
                <Column width={1}>
                  <ImageBanner
                    titleText="Celebrate Pride"
                    subtitleText="Events, shows, talks"
                    imageSrc=""
                    altText="Celebrate Pride banner"
                  />
                </Column>
              </Row>
            </Container>
            <Container>
              <EventsFilters
                showFiltersMobile={this.state.showFiltersMobile}
                toggleFiltersMobile={this.toggleFiltersMobile}
              />
            </Container>
            <Container>
              <Row>
                <ColumnAddFilters width={1}>
                  <Button onClick={this.toggleFiltersMobile} primary>
                    <img
                      src={filterIcon}
                      width="22"
                      height="18"
                      alt="Filters Icon"
                    />{' '}
                    Add Filters
                  </Button>
                </ColumnAddFilters>

                {context.filteredEvents
                  .filter(filterByLimit, context.state.eventsToShow)
                  .map(event => (
                    <FlexColumn
                      width={[
                        1, // 100% between 0px screen width and first breakpoint (375px)
                        1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                        1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1280px)
                        1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
                      ]}
                      key={event.node.id}
                    >
                      <EventListingCard event={event.node} />
                    </FlexColumn>
                  ))}
                <ColumnTextCenter width={1}>
                  <EventCount>
                    You're viewing{' '}
                    {context.state.eventsToShow <= context.filteredCount
                      ? context.state.eventsToShow
                      : context.filteredCount}{' '}
                    of {context.filteredCount} events
                  </EventCount>
                  <Button
                    onClick={() =>
                      context.actions.showMore(context.filteredCount)
                    }
                    primary
                    disabled={
                      context.state.eventsToShow >= context.filteredCount
                    }
                  >
                    Show more events
                  </Button>
                </ColumnTextCenter>
              </Row>
            </Container>
          </Fragment>
        )}
      </Consumer>
    )
  }
}

export default Events
