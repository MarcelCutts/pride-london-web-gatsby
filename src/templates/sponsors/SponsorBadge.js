import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  margin: 0 30px 30px 0;
  ${({ level }) =>
    level === 'Headline'
      ? css`
          height: 175px;
          width: 293px;
        `
      : css`
          height: 110px;
          width: 185px;
        `};
`

const BadgeImage = styled.img`
  max-height: ${({ level }) => (level === 'Headline' ? '84px' : '52px')};
  max-width: ${({ level }) => (level === 'Headline' ? '220px' : '95px')};
`

const SponsorBadge = ({ logo, name, url, level }) => (
  <Badge level={level}>
    <a href={url} target="_blank">
      <BadgeImage src={logo} alt={name} level={level} />
    </a>
  </Badge>
)

SponsorBadge.propTypes = {
  level: PropTypes.oneOf(['Headline', 'Gold', 'Silver', 'Bronze']).isRequired,
}

export default SponsorBadge
