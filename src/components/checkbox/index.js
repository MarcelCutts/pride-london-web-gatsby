import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import checkmark from '../../theme/assets/images/icon-check.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 100%;
`

const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid 2.5px ${props => props.theme.colors.eucalyptusGreen};
  order: 1;
  flex-shrink: 0;
  cursor: pointer;

  &:checked {
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-position: center center;

    & + label {
      font-weight: 700;
    }
  }
`

const Label = styled.label`
  font-size: 0.875rem;
  line-height: 1.43;
`

class Checkbox extends Component {
  state = {
    checked: false,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.checked !== this.state.checked
  }

  componentDidMount() {
    this.setState({checked: this.props.checked})
  }

  toggleCheckbox = e => {
    this.setState({ checked: e.target.checked })

    if (this.props.handleChange) {
      this.props.handleChange(e)
    }
  }

  render() {
    return (
      <Wrapper>
        <Input
          type="checkbox"
          id={this.props.id}
          value={this.props.value}
          name={this.props.name}
          onChange={this.toggleCheckbox}
          checked={this.state.checked}
        />
        <Label htmlFor={this.props.id}>{this.props.label}</Label>
      </Wrapper>
    )
  }
}

Checkbox.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool.isRequired,
}

Checkbox.defaultProps = {
  // checked: false,
  handleChange: null,
  label: '',
  id: '',
  value: '',
  name: '',
}

export default Checkbox
