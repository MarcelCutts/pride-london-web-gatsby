import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const brightLightBlueColor = '#2acfff'
const darkSkyBlueColor = '#2c77e5'
const turquoiseBlueColor = '#00a3bd'
const lightTealColor = '#7de2d1'
const vomitYellowColor = '#c3d30e'
const yellowColor = '#ffd95e'
const warmPinkColor = '#fc4984'
const bubblegumPinkColor = '#ff88f1'
const brightPurpleColor = '#bc01ff'
const cornflowerBlueColor = '#5770d1'
const coralColor = '#ff5b44'

export const getEventCategoryStyleFromName = category => {
  switch (category) {
    case 'Cabaret and Variety':
      return {
        backgroundColor: coralColor,
        color: 'white',
      }
    case 'Community':
      return {
        backgroundColor: brightLightBlueColor,
        color: 'black',
      }
    case 'Talks and Debates':
      return {
        backgroundColor: darkSkyBlueColor,
        color: 'white',
      }
    case 'Film and Screenings':
      return {
        backgroundColor: lightTealColor,
        color: 'black',
      }
    case 'Plays and Theatre':
      return {
        backgroundColor: warmPinkColor,
        color: 'white',
      }
    case 'Social and Networking':
      return {
        backgroundColor: turquoiseBlueColor,
        color: 'white',
      }
    case 'Nightlife':
      return {
        backgroundColor: yellowColor,
        color: 'black',
      }
    case 'Exhibition and Tours':
      return {
        backgroundColor: brightPurpleColor,
        color: 'white',
      }
    case 'Sports and Activities':
      return {
        backgroundColor: vomitYellowColor,
        color: 'black',
      }
    case 'Health':
      return {
        backgroundColor: bubblegumPinkColor,
        color: 'black',
      }
    case 'Music':
      return {
        backgroundColor: cornflowerBlueColor,
        color: 'white',
      }
    default:
      return {
        backgroundColor: cornflowerBlueColor,
        color: 'white',
      }
  }
}

const EventTagListItem = styled.li`
  display: inline-block;
  border-radius: 4px;
  padding: 0px 6px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  margin: 0px 10px 6px 0;
`

const EventTagUl = styled.ul`
  padding: 0;
  margin: 0;
  margin-bottom: -6px;
  list-style-type: none;
`

const EventTagList = ({ values, className }) =>
  values ? (
    <EventTagUl className={className}>
      {values.map(value => (
        <EventTagListItem
          style={getEventCategoryStyleFromName(value)}
          key={value}
        >
          {value}
        </EventTagListItem>
      ))}
    </EventTagUl>
  ) : null

EventTagList.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
}

EventTagList.defaultProps = {
  className: null,
}

export default EventTagList
