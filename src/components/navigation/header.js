import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row } from '../grid/grid'
import NavItems from './navItems'
import logo from '../../theme/assets/images/logo-pride.svg'

const StyledContainer = styled(Container)`
  background-color: ${props => props.theme.colors.indigo};
  color: ${props => props.theme.colors.white};
  position: relative;
`

const StyledRow = styled(Row)`
  height: 100%;
`

const Header = props => {
  const { items } = props

  return (
    <StyledContainer>
      <StyledRow alignItems="center" justifyContent="center">
        <NavItems items={items}>{props.children}</NavItems>
      </StyledRow>
    </StyledContainer>
  )
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  items: PropTypes.shape({
    logo: PropTypes.string,
    listItems: PropTypes.arrayOf(
      PropTypes.shape({
        headerItems: PropTypes.string,
        submenuItems: PropTypes.string,
      })
    ),
    cta: PropTypes.string,
  }).isRequired,
}

export default Header
