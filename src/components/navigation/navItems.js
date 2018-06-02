import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Column } from '../grid'
import SubMenuItems from './subMenuItems'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  font-weight: 600;
  margin: 0 10px 0 10px;
  font-family: 'Poppins';
  text-decoration: none;
`

// const StyledColumn = styled(Column)`
//   height: 100%;
//   padding-top: 0;
//   padding-bottom: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

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

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`

const StyledLi = styled.li`
  list-style: none;
`
// const NavItems = props => {
//   const { listItems, logo, cta } = props.items
//   const { isOpen, mouseOver, mouseOut } = props
// }

class NavItems extends Component {
  state = {
    isSubMenuOpen: false,
    currentValue: null,
  }

  mouseOver = () => {
    this.setState({ isSubMenuOpen: true })
  }

  mouseOut = () => {
    this.setState({ isSubMenuOpen: false })
  }

  verifyValue = event => {
    this.setState({
      currentValue: event.currentTarget.textContent,
    })
  }

  render() {
    const { isSubMenuOpen, currentValue } = this.state
    const { items } = this.props
    const { listItems, logo, cta } = items

    listItems.map(item => console.log(currentValue === item.text))

    return (
      <Fragment>
        <Column flex={6} alignItems="center" justifyContent="center">
          <StyledLink to="/">
            <img src={logo} alt="" />
          </StyledLink>
        </Column>
        {listItems.map(item => (
          <Fragment key={item.text}>
            <Column>
              <StyledUl>
                <StyledLi onMouseEnter={this.mouseOver}>
                  <div onMouseEnter={this.verifyValue}>{item.text}</div>
                  {isSubMenuOpen &&
                    (currentValue === item.text ? (
                      <SubMenuItems item={item} verifyValue={currentValue} />
                    ) : null)}
                </StyledLi>
              </StyledUl>
            </Column>
          </Fragment>
        ))}
        <Column>
          <StyledButton to="#">{cta}</StyledButton>
        </Column>
      </Fragment>
    )
  }
}

NavItems.propTypes = {
  items: PropTypes.object.isRequired,
}

export default NavItems
