import React, { Fragment } from 'react'
import styled from 'styled-components'

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`

const SponsorsSubsection = ({ title, icon, children }) => (
  <Fragment>
    <span>
      <img src={icon} alt="" />
      <h2>{title}</h2>
    </span>
    <BadgesContainer>{children}</BadgesContainer>
  </Fragment>
)

export default SponsorsSubsection
