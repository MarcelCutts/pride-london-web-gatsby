import React from 'react'
import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import Button from '../button'
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

  input + input {
    margin: 20px 0 20px 0;
  }

  button {
    margin-top: 30px;
    border: none;
  }
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
  text-indent: 10px;
  color: ${theme.colors.white};
  overflow: hidden;
  ${media.desktop`
    margin-bottom: 0;
  `};

  &:focus {
    border: 2px solid ${theme.colors.eucalyptusGreen} !important;
  }
`

const StyledTextarea = styled.textarea`
  font-size: 14px;
  font-weight: 500;
  height: auto;
  margin-top: 20px;
  padding-left: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  border-radius: 4px;
  line-height: 17px;
  padding: 20px;
  color: ${theme.colors.white};
  ${media.desktop`
    margin-bottom: 0;
  `};

  &:focus {
    border: 2px solid ${theme.colors.eucalyptusGreen} !important;
    
    &::placeholder {
      font-size: 12px;
      font-weight: lighter;
      position relative;
      top: -15px;
      color: ${theme.colors.eucalyptusGreen};
    }

  }

  &::placeholder {
    color: ${theme.colors.white};
  }
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
    
    &::placeholder {
      font-size: 12px;
      font-weight: lighter;
      position relative;
      top: -15px;
      color: ${theme.colors.eucalyptusGreen};
    }

  }

  &::placeholder {
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

const ContactForm = () => {
  return (
    <Wrapper>
      <StyledTitle>Can't find what you need?</StyledTitle>
      <StyledInput placeholder="Full name" />
      <StyledInput placeholder="E-mail address" />
      <StyledSelect>
        <StyledOption style={{ display: 'none' }} value>
          What is your question about?
        </StyledOption>
        <StyledOption>1</StyledOption>
      </StyledSelect>
      <StyledTextarea placeholder="Question" />
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

export default ContactForm
