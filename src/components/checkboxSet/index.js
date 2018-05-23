import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'
import { Consumer } from '../appContext'
import Checkbox from '../checkbox'
import constants from '../../constants'

const List = styled.ul`
  list-style: none;
  padding: 20px 10px;
  margin: 0;
  border-top: 2px solid transparent;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.white};

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 20px;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    box-shadow: 0 2px 4px 0 ${props => rgba(props.theme.colors.black, 0.2)};
  }
`
const ListItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

class CheckboxSet extends Component {
  makeId = string => {
    const id = string
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/ /g, '_')
      .toLowerCase()
    return `${this.props.filterName}_${id}`
  }

  render() {
    return (
      <Consumer>
        {context => (
          <List>
            {constants[this.props.filterName].map(option => (
              <ListItem key={this.makeId(option)}>
                <Checkbox
                  checked={
                    context.state.filters[this.props.filterName].indexOf(
                      option
                    ) >= 0
                  }
                  label={option}
                  value={option}
                  id={this.makeId(option)}
                  name={this.makeId(option)}
                  handleChange={e =>
                    context.actions.getCheckboxSetValues(
                      e,
                      this.props.filterName
                    )
                  }
                />
              </ListItem>
            ))}
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
