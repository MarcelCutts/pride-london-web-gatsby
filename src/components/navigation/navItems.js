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

StyledLink.displayName = 'LinkTest'

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

const StyledColumn = styled(Column)`
  height: 100px;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
StyledButton.displayName = 'ButtonTest'

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLi = styled.li`
  list-style: none;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.title};
  cursor: pointer;
  padding: 0 15px;
  background-color: none;

  &:hover {
    transition: 1s ease;
    background: ${props => props.theme.colors.lightIndigo};
  }
`

class NavItems extends Component {
  state = {
    isSubMenuOpen: false,
    currentValue: null,
    hasSubmenu: false,
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

    return (
      <Fragment>
        <Column flex={6} alignItems="center" justifyContent="center">
          <StyledLink to="/">
            <img src={logo} alt="" />
          </StyledLink>
        </Column>
        <Fragment>
          <StyledColumn>
            <StyledUl>
              {listItems.map(item => (
                <StyledLi key={item.text} onMouseEnter={this.mouseOver}>
                  <div onMouseEnter={this.verifyValue}>{item.text}</div>
                  {isSubMenuOpen &&
                    item.hasOwnProperty('submenu') &&
                    (currentValue === item.text ? (
                      <SubMenuItems
                        item={item}
                        verifyValue={currentValue}
                        mouseLeave={this.mouseOut}
                        isOpen={isSubMenuOpen}
                      />
                    ) : null)}
                </StyledLi>
              ))}
            </StyledUl>
          </StyledColumn>
        </Fragment>
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
