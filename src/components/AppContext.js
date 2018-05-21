import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  filterByDate,
  filterByFree,
  filterByCategory,
  filterByArea,
  filterByTime,
  filterPastEvents,
} from '../templates/events/helpers/index.js'

const AppContext = React.createContext()
const { Consumer } = AppContext

const initialState = {
  filterOpen: null,
  filteredEventsCount: 0,
  filters: {
    date: null,
    free: false,
    eventCategories: [],
    venueDetails: [],
    audience: [],
    accessibilityOptions: [],
    area: [],
    timeOfDay: [],
  },
}

class Provider extends Component {
  state = { ...initialState }

  getDatepickerValue = date => {
    const { state } = this
    state.filters.date = date
    this.setState(state)
  }

  getCheckboxBool = (e, name) => {
    const { state } = this
    state.filters[name] = e.target.checked
    this.setState(state)
  }

  getCheckboxSetValues = (e, name) => {
    const { state } = this

    if (
      e.target.checked &&
      state.filters[name].indexOf(e.target.value) === -1
    ) {
      state.filters[name].push(e.target.value)
    } else {
      const index = state.filters[name].indexOf(e.target.value)
      if (index > -1) {
        this.state.filters[name].splice(index, 1)
      }
    }

    this.setState(state)
  }

  clearFilters = () => {
    const { state } = this
    state.filterOpen = null
    state.filters = {
      date: null,
      free: false,
      eventCategories: [],
      venueDetails: [],
      audience: [],
      accessibilityOptions: [],
      area: [],
      timeOfDay: [],
    }
    this.setState(state)
  }

  closeSiblingFilters = (filterName, isOpen) => {
    if (isOpen && filterName != this.state.openFilter) {
      const { state } = this
      this.state.filterOpen = filterName
      this.setState(state)
    }
  }

  filterEvents = () => {
    const filteredEvents = this.props.events
      .filter(filterPastEvents)
      .filter(filterByDate, this.state.filters.date)
      .filter(filterByFree, this.state.filters.free)
      .filter(filterByCategory, {
        array: this.state.filters.eventCategories,
        key: 'eventCategories',
      })
      .filter(filterByCategory, {
        array: this.state.filters.venueDetails,
        key: 'venueDetails',
      })
      .filter(filterByCategory, {
        array: this.state.filters.accessibilityOptions,
        key: 'accessibilityOptions',
      })
      .filter(filterByCategory, {
        array: this.state.filters.audience,
        key: 'audience',
      })
      .filter(filterByArea, this.state.filters.area)
      .filter(filterByTime, this.state.filters.timeOfDay)

    return filteredEvents
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          events: this.props.events.filter(filterPastEvents),
          filteredEvents: this.filterEvents(),
          actions: {
            getCheckboxBool: this.getCheckboxBool,
            getDatepickerValue: this.getDatepickerValue,
            getCheckboxSetValues: this.getCheckboxSetValues,
            clearFilters: this.clearFilters,
            closeSiblingFilters: this.closeSiblingFilters,
            getFilteredEventsCount: this.getFilteredEventsCount,
          },
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  events: PropTypes.array,
}

Provider.defaultProps = {
  events: [],
}

module.exports = {
  Provider,
  Consumer,
}
