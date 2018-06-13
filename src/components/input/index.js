import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'
import { media } from '../../theme/media'

const Field = styled.div`
  margin-bottom: 20px;
  position: relative;
`

const StyledInput = styled.input`
  appearance: none;
  border: none;
  border-radius: 4px;
  height: 58px;
  background-color: ${props => rgba(props.theme.colors.black, 0.2)};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.21;
  color: ${props => props.theme.colors.white};
  padding: 21px 20px;
  width: 100%;
  ${media.tablet`
  `};
`

const Label = styled.label`
  position: absolute;
  transition: all 0.15s linear;
  top: ${props => !props.focused ? '21px' : '0'};
  left: 20px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.21;
`

class Input extends Component {
  state = {
    value: '',
    focused: false,
  }

  handleChange = (e) => {
    this.setState({value: e.target.value}, ()=> {
      if(this.props.handleChange) {
        this.props.handleChange(this.state.value)
      }
    })
  }

  render() {
    console.log("input rendering")
    return (
      <Field>    
        <StyledInput
          type={this.props.type}
          id={this.props.id}
          value={this.state.value}
          onChange={this.handleChange}
          required={this.props.required}
          onFocus={() => this.setState({focused: true})}
          onBlur={() => this.setState({focused: false})}

        />
        <Label 
          for={this.props.id}
          focused={this.state.focused}
          empty={this.state.value}
        >
          {this.props.label}
        </Label>
      </Field>
    )
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  handleChange: PropTypes.func,
}

Input.defaultProps = {
  required: false,
  handleChange: null,
}


export default Input
