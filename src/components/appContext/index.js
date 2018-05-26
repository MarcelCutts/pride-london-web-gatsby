// @flow
import * as React from 'react'
import {
  filterByDate,
  filterByFree,
  filterByCategory,
  filterByArea,
  filterByTime,
  filterPastEvents,
} from '../../templates/events/helpers'
import { itemsToLoad } from '../../constants'

const AppContext = React.createContext()
const { Consumer } = AppContext

const initialFilterState = {
  date: null,
  free: false,
  eventCategories: [],
  venueDetails: [],
  audience: [],
  accessibilityOptions: [],
  area: [],
  timeOfDay: [],
}

const initialState = {
  filterOpen: null,
  filteredEventsCount: 0,
  eventsToShow: itemsToLoad,
  filters: initialFilterState,
}

type Props = {
  events: Array<*>, // TODO The shape of the array should be typed
  children: React.Node,
}

type State = {
  filterOpen: ?string,
  eventsToShow: typeof itemsToLoad,
  filteredEventsCount: number,
  filters: {
    date: ?Date,
    free: boolean,
    eventCategories: Array<string>,
    venueDetails: Array<string>,
    audience: Array<string>,
    accessibilityOptions: Array<string>,
    area: Array<string>, // NOTE This does not exist in graphql?
    timeOfDay: Array<string>,
  },
}

class Provider extends React.Component<Props, State> {
  state = initialState

  static defaultProps = {
    events: [],
  }

  getDatepickerValue = (date: Date) => {
    this.setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        date,
      },
    }))
  }

  getCheckboxBool = (name: string, checked: boolean) => {
    console.log('getCheckboxBool', checked)
    this.setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        free: checked,
      },
    }))
  }

  getCheckboxSetValues = (
    e: SyntheticInputEvent<HTMLInputElement>,
    name: string
  ) => {
    const state = {
      ...this.state,
      filters: { ...this.state.filters },
    }

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
    this.setState({
      ...this.state,
      filterOpen: null,
      filters: initialFilterState,
    })
  }

  closeSiblingFilters = (filterName: string, isOpen: string) => {
    if (isOpen && filterName != this.state.filterOpen) {
      this.setState(prevState => ({
        ...prevState,
        filterOpen: filterName,
      }))
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

  showMore = (filteredCount: number) => {
    if (this.state.eventsToShow < filteredCount) {
      this.setState({ eventsToShow: this.state.eventsToShow + itemsToLoad })
    }
  }

  render() {
    const filteredEvents = this.filterEvents()
    const filteredCount = filteredEvents.length
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          events: this.props.events.filter(filterPastEvents),
          filteredEvents,
          filteredCount,
          actions: {
            getCheckboxBool: this.getCheckboxBool,
            getDatepickerValue: this.getDatepickerValue,
            getCheckboxSetValues: this.getCheckboxSetValues,
            clearFilters: this.clearFilters,
            closeSiblingFilters: this.closeSiblingFilters,
            showMore: this.showMore,
          },
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

module.exports = {
  Provider,
  Consumer,
}
