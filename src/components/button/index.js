import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'

export const Button = props => {
  const StyledButton = styled[props.link ? 'a' : 'button']`
    box-sizing: border-box;
    border: none;
    padding: 12px;
    border-radius: 4px;
    display: inline-block;
    color: ${styleProps =>
      styleProps.primary
        ? styleProps.theme.colors.indigo
        : styleProps.theme.colors.eucalyptusGreen};
    background-color: ${styleProps =>
      styleProps.primary
        ? styleProps.theme.colors.eucalyptusGreen
        : styleProps.theme.colors.indigo};
    font-family: ${styleProps => styleProps.theme.fonts.title};
    font-weight: 700;
    font-size: ${styleProps => (styleProps.small ? '0.875rem' : '1.125rem')};
    line-height: 1.388;
    min-width: ${styleProps => (styleProps.wide ? '250px' : '180px')};
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.15s linear;

    &:hover {
      background-color: ${styleProps =>
        styleProps.primary
          ? darken(0.1, styleProps.theme.colors.eucalyptusGreen)
          : darken(0.1, styleProps.theme.colors.indigo)};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `

  return (
    <StyledButton
      type={props.link ? null : props.type}
      primary={props.primary}
      onClick={props.onClick}
      disabled={props.disabled}
      href={props.link ? props.to : null}
      small={props.small}
      wide={props.wide}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  link: PropTypes.bool,
  type: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  to: PropTypes.string,
  wide: PropTypes.bool,
}

Button.defaultProps = {
  link: false,
  type: 'button',
  primary: false,
  children: 'Button',
  onClick: () => {},
  disabled: false,
  small: false,
  to: null,
  wide: true,
}

export default Button
