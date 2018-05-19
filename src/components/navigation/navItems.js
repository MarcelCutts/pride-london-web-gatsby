import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Column } from '../grid/grid'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  font-weight: 600;
  margin: 0 10px 0 10px;
  font-family: 'Poppins';
  text-decoration: none;
`

const StyledColumn = styled(Column)`
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled(Link)`
  color: ${props => props.theme.colors.white};
  width: 138px;
  height: 40px;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.indigo};
  background-color: ${props => props.theme.colors.eucalyptusGreen};
`

const NavItems = props => {
  console.log(props)
  const { listItems, logo } = props.items
  return (
    <Fragment>
      <Column flex={6} alignItems="center" justifyContent="center">
        <img src={logo} alt="" />
      </Column>
      {listItems.map((items, index) => (
<<<<<<< HEAD:src/components/navigation/navItems.js
        <StyledColumn
          key={index}
          onMouseEnter={props.mouseOver}
          onMouseLeave={props.mouseOut}
        >
=======
        <Column key={index}>
>>>>>>> fd4e38be0ace586256da4d8ba4572c109f3a0370:src/components/navigation/presentational/navItems.js
          <StyledLink to="#"> {items}</StyledLink>
        </StyledColumn>
      ))}
      <Column>
<<<<<<< HEAD:src/components/navigation/navItems.js
        <StyledButton to="#">Donate</StyledButton>
=======
        <StyledButton to="/">Donate</StyledButton>
>>>>>>> fd4e38be0ace586256da4d8ba4572c109f3a0370:src/components/navigation/presentational/navItems.js
      </Column>
    </Fragment>
  )
}

NavItems.propTypes = {
  items: PropTypes.object,
}

export default NavItems
