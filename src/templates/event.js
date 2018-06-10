import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'
import NewsletterForm from '../components/newsletter'
import { media } from '../theme/media'
import {
  EventTagList,
  EventsYouMayLike,
  EventInfoCard,
  EventDirectionsSection,
} from '../components/events'

const PageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${props => props.theme.breakpoints[3]};
  background-color: white;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.indigo};
  font-size: 1.25em;
  line-height: 1.5;
  margin-bottom: 20px;
  ${media.desktop`
    font-size: 1.75em;
    line-height: 1.4;
  `};
`
const HeroImageAndTitle = styled.div`
  display: flex;
  flex-direction: column-reverse;
  ${media.desktop`
    flex-direction: column;
  `};
`

const ContentWrapper = styled.div`
  padding: 30px 20px;
  width: 100vw;
  ${media.tablet`
    padding: 30px 50px;
  `};
  ${media.desktop`
    padding: 0;
    margin-left: 90px;
    max-width: 45vw;
  `};
  ${media.desktopHD`
    max-width: 830px;
  `};
`

const TitleWrapper = ContentWrapper.extend`
  ${media.desktop`
    padding: 60px 0px 50px;
  `};
`

const HeroImage = styled.div`
  background-size: cover;
  background-image: url(${props => props.src});

  height: 240px;
  ${media.desktop`
    height: 480px;
  `};
`

const Section = styled.div`
  margin-bottom: 20px;
  ${media.desktop`
    margin-bottom: 60px;
  `};
`

// eslint-disable-next-line react/prefer-stateless-function
export default class Event extends Component {
  render() {
    const {
      id,
      individualEventPicture,
      eventDescription,
      name,
      eventCategories,
      accessibilityDetails,
      location,
      locationName,
      addressLine1,
      addressLine2,
      city,
      postcode,
      eventPriceLow,
    } = this.props.data.contentfulEvent

    const metaImg = `${individualEventPicture.file.url}?w=1000&h=562`
    const metaUrl =
      typeof window !== 'undefined' &&
      window.location.hostname + this.props.location.pathname

    return (
      <PageWrapper>
        <Helmet
          title={name}
          meta={[
            // Schema meta tags
            {
              itemprop: 'name',
              content: name,
            },
            {
              itemprop: 'description',
              content: eventDescription.eventDescription,
            },
            {
              itemprop: 'url',
              content: metaUrl,
            },
            {
              itemprop: 'thumbnailUrl',
              content: metaImg,
            },
            {
              itemprop: 'image',
              content: metaImg,
            },
            {
              itemprop: 'startDate',
              content: props.pathContext.startTime,
            },
            {
              itemprop: 'endDate',
              content: props.pathContext.endTime,
            },
            {
              itemprop: 'isAccessibleForFree',
              content: eventPriceLow === 0 ? true : false,
            },

            // OpenGraph Meta Tags
            {
              property: 'og:title',
              content: name,
            },
            {
              property: 'og:description',
              content: eventDescription.eventDescription,
            },
            {
              property: 'og:latitude',
              content: location.lat,
            },
            {
              property: 'og:longitude',
              content: location.lon,
            },
            {
              property: 'og:street-address',
              content: !addressLine1
                ? ''
                : addressLine2
                  ? `${locationName}, ${addressLine1}, ${addressLine2}`
                  : `${locationName}, ${addressLine1}`,
            },
            {
              property: 'og:locality',
              content: city && city,
            },
            {
              property: 'og:postal-code',
              content: postcode && postcode,
            },
            {
              property: 'og:url',
              content: metaUrl,
            },

            // Twitter Meta Tags
            {
              name: 'twitter:title',
              content: name,
            },
            {
              name: 'twitter:description',
              content: eventDescription.eventDescription,
            },
            {
              name: 'twitter:image',
              content: metaImg,
            },
            {
              name: 'twitter:url',
              content: metaUrl,
            },
          ]}
          htmlAttributes={{
            itemtype: 'http://schema.org/Event',
          }}
        />
        <HeroImageAndTitle>
          <HeroImage
            src={individualEventPicture.file.url}
            role="presentation"
          />
          <TitleWrapper>
            <Title>{name}</Title>
            <EventTagList values={eventCategories} />
          </TitleWrapper>
        </HeroImageAndTitle>
        <EventInfoCard
          data={this.props.data.contentfulEvent}
          pathContext={this.props.pathContext}
        />
        <ContentWrapper>
          <Section>
            <ReactMarkdown source={eventDescription.eventDescription} />
          </Section>
          {accessibilityDetails && (
            <React.Fragment>
              <h2>Accessibility</h2>
              <Section>
                <ReactMarkdown
                  source={accessibilityDetails.accessibilityDetails}
                />
              </Section>
            </React.Fragment>
          )}
        </ContentWrapper>
        <EventDirectionsSection data={this.props.data.contentfulEvent} />
        <EventsYouMayLike eventId={id} />
        <NewsletterForm buttonText="Subscribe" />
      </PageWrapper>
    )
  }
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
}

export const eventPageQuery = graphql`
  query eventQuery($id: String!) {
    contentfulEvent(id: { eq: $id }) {
      id
      name
      individualEventPicture {
        file {
          url
        }
        title
        description
      }
      eventCategories
      eventDescription {
        eventDescription
      }
      accessibilityDetails {
        accessibilityDetails
      }
      ...eventDirectionsFragment
      ...eventInfoCardQuery
    }
  }
`
