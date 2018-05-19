import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Submenu from './submenu'
class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  mouseOver = () => {
    this.setState(prevState => ({
      isOpen: true,
    }))
  }

  mouseOut = () => {
    this.setState(prevState => ({
      isOpen: false,
    }))
  }

  render() {
    console.log(this.state.isOpen)
    return (
      <Fragment>
        <Header
          {...this.props}
          mouseOver={this.mouseOver}
          mouseOut={this.mouseOut}
        >
          {this.props.children}
        </Header>
        {this.state.isOpen ? <Submenu /> : null}
      </Fragment>
    )
  }
}

Navigation.propTypes = {
  items: PropTypes.shape({
    logo: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.objectOf(PropTypes.string),
    cta: PropTypes.string,
  }).isRequired,
}

export default Navigation
