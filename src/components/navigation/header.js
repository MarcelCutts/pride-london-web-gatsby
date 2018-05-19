import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row } from '../grid/grid'
import NavItems from './navItems'

const StyledContainer = styled(Container)`
  background-color: ${props => props.theme.colors.indigo};
  color: ${props => props.theme.colors.white};
  height: 100px;
`

const StyledRow = styled(Row)`
  height: 100%;
`

const Header = props => {
  return (
    <StyledContainer>
      <StyledRow alignItems="center" justifyContent="center">
        <NavItems items={props.items} {...props}>
          {props.children}
        </NavItems>
      </StyledRow>
    </StyledContainer>
  )
}

export default Header
