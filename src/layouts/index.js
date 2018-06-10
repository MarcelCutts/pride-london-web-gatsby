import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Provider } from '../components/appContext'
// import Navigation from '../components/navigation'
import SimpleNav from '../components/simpleNav'
import theme from '../theme/theme'
import favicon from '../favicon.ico'
import metaImg from '../theme/assets/images/Pride-in-London-2018-save-the-date1024.jpg'

import './index.css'
import './fonts.css'

const Layout = props => (
  <Provider events={props.data.allContentfulEvent.edges}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Helmet
          title={props.data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: props.data.site.siteMetadata.description,
            },

            // Schema meta tags
            {
              itemprop: 'name',
              content: props.data.site.siteMetadata.title,
            },
            {
              itemprop: 'url',
              content: props.data.site.siteMetadata.url,
            },
            {
              itemprop: 'thumbnailUrl',
              content: metaImg,
            },
            {
              itemprop: 'image',
              content: metaImg,
            },
            // OpenGraph Meta Tags
            {
              property: 'og:site_name',
              content: props.data.site.siteMetadata.name,
            },
            {
              property: 'og:title',
              content: props.data.site.siteMetadata.title,
            },
            {
              property: 'og:url',
              content: props.data.site.siteMetadata.url,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:image:width',
              content: '1000',
            },
            {
              property: 'og:image:height',
              content: '562',
            },
            // Twitter Meta Tags
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:title',
              content: props.data.site.siteMetadata.title,
            },
            {
              name: 'twitter:image',
              content: metaImg,
            },
            {
              name: 'twitter:url',
              content: props.data.site.siteMetadata.url,
            },
          ]}
          link={[
            {
              rel: 'icon',
              href: favicon,
            },
            {
              rel: 'image_src',
              content: metaImg,
            },
          ]}
          htmlAttributes={{
            lang: 'en-GB',
            itemscope: true,
            itemtype: 'http://schema.org/WebPage',
          }}
        />
        <SimpleNav />
        <main>{props.children()}</main>
      </Fragment>
    </ThemeProvider>
  </Provider>
)

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default Layout

export const query = graphql`
  query rootQuery {
    site {
      siteMetadata {
        name
        title
        description
        url
      }
    }

    allContentfulEvent(filter: {}, sort: { fields: [startTime], order: ASC }) {
      edges {
        node {
          id
          name
          startTime
          endTime
          recurrenceDates
          eventPriceLow
          eventCategories
          venueDetails
          audience
          accessibilityOptions
          postcode
          eventsListPicture {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`
