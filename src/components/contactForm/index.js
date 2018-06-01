import React from 'react'
import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import Button from '../button'
import chevronDown from '../../theme/assets/images/icon-chevron-down-white.svg'
import chevronUp from '../../theme/assets/images/icon-chevron-up-white.svg'
import 'react-accessible-accordion/dist/fancy-example.css'

const Wrapper = styled.div`
  background-color: ${theme.colors.indigo};
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  color: white;
  ${media.desktop`
    position: absolute;
    width: 400px;
    right: 90px;
    top: 270px;
    padding: 40px;
 `};
  
  span {
    margin-bottom 20px;
  }

  button {
    border: none;
  }

`

const StyledSpan = styled.span`
  position: relative;
`

const StyledSelect = styled.select`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  margin-bottom: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  border-radius: 4px;
  line-height: 17px;
  height: 58px;
  apperance: none;
  padding: 20px;
  padding-left: 10px;
  text-indent: 10px;
  color: ${theme.colors.white};
  overflow: hidden;
  appearance: none;
  background-image: url(${chevronDown});
  background-repeat: no-repeat;
  background-position: 94%;
  ${media.desktop`
    margin-bottom: 0;
  `};

  &:focus {
    border: 2px solid ${theme.colors.eucalyptusGreen} !important;
    background-image: url(${chevronUp});
  }
`

const StyledTextarea = styled.textarea`
  font-size: 14px;
  font-weight: 500;
  height: auto;
  padding-left: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  border-radius: 4px;
  line-height: 17px;
  height: 58px;
  padding: 20px;
  color: ${theme.colors.white};
  resize: none;
  ${media.desktop`
    margin-bottom: 0;
  `};

  &:focus {
    border: 2px solid ${theme.colors.eucalyptusGreen} !important;
    padding-top: 25px;

    + label {
      font-size: 12px;
      font-weight: lighter;
      top: -10px;
      color: ${theme.colors.eucalyptusGreen};
    }
  }

  + label {
    color: ${theme.colors.white};
  }
`

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  left: 0;
  padding: 20px;
`

const StyledInput = styled.input`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  padding-left: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  border-radius: 4px;
  line-height: 17px;
  height: 58px;
  padding: 20px;
  color: ${theme.colors.white};
  ${media.desktop`
    margin-bottom: 0;
  `};

  &:focus {
    border: 2px solid ${theme.colors.eucalyptusGreen} !important;
    padding-top: 30px;
    padding-left: 18px;

    + label {
      font-size: 12px;
      font-weight: lighter;
      top: -10px;
      padding-bottom: 5px;
      color: ${theme.colors.eucalyptusGreen};
    }
  }

  + label {
    color: ${theme.colors.white};
  }
`

const StyledOption = styled.option`
  color: ${theme.colors.white} !important;
  font-size: 14px;
  apperance: none;
  &:hover {
    color: ${theme.colors.eucalyptusGreen};
  }
`

const AddressBox = styled.div`
  margin-top: 30px !important;

  h2 {
    margin-bottom: 10px;
  }
`

const StyledTitle = styled.h2`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title};
  font-size: 24px;
`

class ContactForm extends React.Component {
  showLabels = e => {
    const label = e.target.nextElementSibling
    label.style.display = 'inline'

    if (e.target.tagName == 'TEXTAREA') {
      this.increaseTextarea(e.target)
    }
  }

  hideLabels = e => {
    const label = e.target.nextElementSibling

    if (e.target.value != '') {
      label.style.display = 'none'
    } else {
      label.style.display = 'inline'
    }

    if (e.target.tagName == 'TEXTAREA' && e.target.value != '') {
      this.increaseTextarea(e.target)
    } else {
      this.decreaseTextarea(e.target)
    }
  }

  increaseTextarea = textarea => {
    textarea.style.height = '128px'
  }

  decreaseTextarea = textarea => {
    textarea.style.height = '58px'
  }

  render() {
    return (
      <Wrapper>
        <StyledTitle>Can't find what you need?</StyledTitle>
        <StyledSpan>
          <StyledInput
            id="name"
            onFocus={e => this.showLabels(e)}
            onBlur={e => this.hideLabels(e)}
          />
          <StyledLabel htmlFor="name">Full name</StyledLabel>
        </StyledSpan>
        <StyledSpan>
          <StyledInput
            id="email"
            onFocus={e => this.showLabels(e)}
            onBlur={e => this.hideLabels(e)}
          />
          <StyledLabel type="email" htmlFor="email">
            E-mail address
          </StyledLabel>
        </StyledSpan>
        <StyledSpan>
          <StyledSelect id="options">
            <StyledOption style={{ display: 'none' }}>
              What is your question about?
            </StyledOption>
            <StyledOption>1</StyledOption>
          </StyledSelect>
        </StyledSpan>
        <StyledSpan>
          <StyledTextarea
            id="question"
            onFocus={e => this.showLabels(e)}
            onBlur={e => this.hideLabels(e)}
          />
          <StyledLabel htmlFor="question">Question</StyledLabel>
        </StyledSpan>
        <Button primary>Send question</Button>
        <AddressBox>
          <StyledTitle>Or write to us..</StyledTitle>
          <small>
            London LGBT+ Community Pride CIC, PO Box 71920, London NW2 9QN
          </small>
        </AddressBox>
      </Wrapper>
    )
  }
}

export default ContactForm
