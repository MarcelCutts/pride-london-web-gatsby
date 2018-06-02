import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'
import { Column, Row, Container } from '../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  min-height: 270px;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.color};

  & img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  ${media.tablet`
    height: 400px;
  `};
`

const StyledRow = styled(Row)`
  display: block;
  flex-basis: 100%;
`

const ImageBanner = ({ titleText, subtitleText, imageSrc, altText, color }) => (
  <StyledContainer color={color}>
    {imageSrc && <img src={imageSrc} alt={altText} />}
    <StyledRow>
      <Column width={1}>
        <BannerTitle>{titleText}</BannerTitle>
        <BannerSubtitle>{subtitleText}</BannerSubtitle>
      </Column>
    </StyledRow>
  </StyledContainer>
)

ImageBanner.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string,
  color: PropTypes.string,
}

ImageBanner.defaultProps = {
  imageSrc: '',
  altText: '',
  subtitleText: '',
  titleText: '',
  color: '',
}

export default ImageBanner
