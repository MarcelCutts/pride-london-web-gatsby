import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'
import { Column, Row, Container } from '../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'

const StyledContainer = styled(Container)`
  display: flex;
  align-items: flex-end;
  min-height: 270px;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding-bottom: 35px;
  z-index: -2;

  & img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  ${media.tablet`
    align-items: center;
    height: ${props => (props.large === 'true' ? '500px' : '400px')};
    padding: 0;
  `};
`

const StyledRow = styled(Row)`
  display: block;
  flex-basis: 100%;
`

const ImageBanner = ({
  titleText,
  subtitleText,
  imageSrc,
  altText,
  color,
  children,
  large,
}) => (
  <StyledContainer 
    color={color} 
    large={large} 
    role="banner" 
    aria-label={altText}
    style={imageSrc && {backgroundImage: `url(${imageSrc})`}}
  >
    <StyledRow>
      <Column width={1}>
        <BannerTitle>{titleText}</BannerTitle>
        <BannerSubtitle>{subtitleText}</BannerSubtitle>
      </Column>
      {children}
    </StyledRow>
  </StyledContainer>
)

ImageBanner.propTypes = {
  large: PropTypes.string,
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

ImageBanner.defaultProps = {
  large: 'false', // this isn' a bool because styled components
  imageSrc: '',
  altText: '',
  subtitleText: '',
  titleText: '',
  color: '',
  children: null,
}

export default ImageBanner
