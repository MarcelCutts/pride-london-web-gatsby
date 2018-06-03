import styled from 'styled-components'
import chevronDown from '../../theme/assets/images/icon-chevron-down.svg'
import chevronUp from '../../theme/assets/images/icon-chevron-up.svg'

const AccordionWrapper = styled.div`
  .accordion__body {
    padding-top: 0 !important;
    background-color: ${props => props.theme.colors.lightGrey} !important;
    animation: none !important;

    p {
      font-size: 18px;
      line-height: 27px;
      @media (max-width: ${props => props.theme.breakpoints[1]}) {
        font-size: 14px;
      }
    }
  }

  .accordion__title {
    padding: 20px !important;
    border-radius: 4px;
    outline: none;
    background-color: ${props => props.theme.colors.lightGrey} !important;
    background-image: url(${chevronDown});
    background-repeat: no-repeat;
    background-position: 94%;

    h3 {
      line-height: 20px;
      font-size: 16px;
      margin-top: 0;
      color: ${props => props.theme.colors.black};

      &:hover {
        color: ${props => props.theme.colors.indigo};
      }

      @media (max-width: ${props => props.theme.breakpoints[1]}) {
        font-size: 14px;
      }
    }
  }

  .accordion__title[aria-selected='true'] {
    border-top: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-left: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-right: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    background-color: ${props => props.theme.colors.white} !important;
    background-image: url(${chevronUp});

    h3 {
      color: ${props => props.theme.colors.indigo};
    }
  }

  .accordion__body[aria-hidden='false'] {
    border-bottom: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-left: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-right: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-bottom-left-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
    background-color: ${props => props.theme.colors.white} !important;
  }

  .accordion__item + .accordion__item {
    border-top: none;
    margin-top: 20px;
  }

  .accordion {
    border: none;
    border-radius: 4px !important;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export default AccordionWrapper
