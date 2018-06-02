import React, { Component, Fragment } from 'react'
import Header from './header'
import logo from '../../theme/assets/images/logo-pride.svg'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
      <Fragment>
        <Header
          isOpen={this.state.isOpen}
          items={{
            logo,
            listItems: [
              {
                text: 'Learn',
                submenu: {
                  text: 'Learn',
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',

                  items: {
                    left: ['About us', 'Meet the team', 'Our history'],
                    right: ['News', 'Our mission'],
                  },
                },
              },
              {
                text: 'Attend',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',

                  items: {
                    left: ['About us', 'Meet the team', 'Our history'],
                    right: ['News', 'Our mission'],
                  },
                },
              },
              {
                text: 'Support us',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',

                  items: {
                    left: ['About us', 'Meet the team', 'Our history'],
                    right: ['News', 'Our mission'],
                  },
                },
              },
              {
                text: 'Take part',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',

                  items: {
                    left: ['About us', 'Meet the team', 'Our history'],
                    right: ['News', 'Our mission'],
                  },
                },
              },
              {
                text: 'Plan',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
                  items: {
                    left: ['About us', 'Meet the team', 'Our history'],
                    right: ['News', 'Our mission'],
                  },
                },
              },
              {
                item: 'help',
              },
            ],
            cta: 'donate',
          }}
        >
          {this.props.children}
        </Header>
      </Fragment>
    )
  }
}

Navigation.defaultProps = {
  children: null,
  items: {},
}

export default Navigation
