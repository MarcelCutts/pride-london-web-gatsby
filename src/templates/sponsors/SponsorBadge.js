import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import constants from '../../constants'

const isLargeBadge = level =>
  level === constants.sponsorLevels.headline ||
  level === constants.sponsorLevels.gold

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  margin: 0 30px 30px 0;
  ${({ level }) =>
    isLargeBadge(level)
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
  max-height: ${({ level }) => (isLargeBadge(level) ? '84px' : '52px')};
  max-width: ${({ level }) => (isLargeBadge(level) ? '220px' : '95px')};
`

const NamePlaceholder = styled.h3`
  color: #9b9b9b;
  display: inline-block;
  margin: 0;
  padding: 15px;
  text-align: center;
`

const SponsorBadge = ({ logo, name, url, level }) => (
  <Badge level={level}>
    <a href={url} target="_blank">
      {logo ? (
        <BadgeImage src={logo} alt={name} level={level} />
      ) : (
        <NamePlaceholder>{name}</NamePlaceholder>
      )}
    </a>
  </Badge>
)

SponsorBadge.propTypes = {
  level: PropTypes.oneOf(['Headline', 'Gold', 'Silver', 'Bronze']).isRequired,
}

export default SponsorBadge
