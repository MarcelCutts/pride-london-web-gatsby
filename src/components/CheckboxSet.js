import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'
import { Consumer } from './AppContext'
import Checkbox from './Checkbox'
import constants from '../constants/constants'

const List = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 1;
  border-top: 2px solid transparent;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 ${props => rgba(props.theme.colors.black, 0.2)};
  background-color: ${props => props.theme.colors.white};
`
const ListItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

class CheckboxSet extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <List>
            {constants[this.props.filterName].map((option, index) => {
              return (
                <ListItem key={index}>
                  <Checkbox
                    checked={
                      context.state.filters[this.props.filterName].indexOf(option) !=
                      -1
                        ? true
                        : false
                    }
                    label={option}
                    value={option}
                    handleChange={e =>
                      context.actions.getCheckboxSetValues(e, this.props.filterName)
                    }
                  />
                </ListItem>
              )
            })}
          </List>
        )}
      </Consumer>
    )
  }
}

CheckboxSet.propTypes = {
  filterName: PropTypes.string.isRequired,
}

export default CheckboxSet
