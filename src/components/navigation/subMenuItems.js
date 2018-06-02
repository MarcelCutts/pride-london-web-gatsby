import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { Container, Row, Column } from '../grid'

const StyledContainer = styled(Container)`
  background-color: ${props => props.theme.colors.beachBlue};
  color: ${props => props.theme.colors.white};
  position: absolute;
  left: 0;
  right: 0;
  top: 90px;
  z-index: 100;
`

// const StyledRow = styled(Row)`
//   height: 100%;
// `

const SubMenuItems = props => {
  const { item, verifyValue } = props

  return (
    <StyledContainer>
      <Row>
        <Column>{verifyValue === item.text ? item.text : null}</Column>
      </Row>
    </StyledContainer>
  )
}

export default SubMenuItems
