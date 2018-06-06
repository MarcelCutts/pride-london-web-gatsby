import React, { Fragment } from 'react'
import styled from 'styled-components'
import ImageBanner from '../components/imageBanner'
import theme from '../theme/theme'
import Button from '../components/button'
import { Column } from '../components/grid'

const ColumnTextCenter = styled(Column)`
  text-align: center;
  width: fit-content;
`

const Home = () => (
  <Fragment>
    <ImageBanner
      titleText="See what's on at the festival"
      subtitleText="See the full list of events at this year's Pride Festival"
      imageSrc=""
      altText="Celebrate Pride banner"
      color={theme.colors.beachBlue}
      large
    >
      <ColumnTextCenter>
        <Button wide={false} primary link to="/events/">
          Find out more
        </Button>
      </ColumnTextCenter>
    </ImageBanner>
  </Fragment>
)

export default Home
