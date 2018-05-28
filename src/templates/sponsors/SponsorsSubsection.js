import React, { Fragment } from 'react'
import styled from 'styled-components'
import { media } from '../../theme/media'

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  ${media.tablet`
    margin-top: 20px
  `};
`

const Title = styled.h2`
  margin: 0;
`

const SponsorsSubsection = ({ title, icon, children }) => (
  <Fragment>
    <span>
      <img src={icon} alt="" />
      <Title>{title}</Title>
    </span>
    <BadgesContainer>{children}</BadgesContainer>
  </Fragment>
)

export default SponsorsSubsection
