require('babel-register')
const path = require('path')
const moment = require('moment')
const {
  sanitizeDates,
  formatTime,
  getDuration,
} = require('./src/components/events/helpers')

const { dateFormat } = require('./src/constants')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allContentfulEvent(filter: {}) {
        edges {
          node {
            id
            name
            recurrenceDates
            startTime
            endTime
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const eventTemplate = path.resolve('./src/templates/event.js')
    const prettyDate = 'D MMM YYYY'
    result.data.allContentfulEvent.edges.forEach(edge => {
      if (!edge.node.recurrenceDates || !edge.node.recurrenceDates.length) {
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/events/${edge.node.id}/`,
          component: eventTemplate,
          context: {
            id: edge.node.id,
            startDate: moment(edge.node.startTime).format(prettyDate),
            endDate: moment(edge.node.endTime).format(prettyDate),
            startTime: formatTime(edge.node.startTime),
            endTime: formatTime(edge.node.endTime),
          },
        })
      } else {
        const recurrenceDates = sanitizeDates([
          moment(edge.node.startTime).format(dateFormat),
          ...edge.node.recurrenceDates,
        ])

        recurrenceDates.forEach(date => {
          const customId = `${edge.node.id}-${moment(date).format('YYYYMMDD')}`
          createPage({
            path: `/events/${customId}/`,
            component: eventTemplate,
            context: {
              id: edge.node.id,
              startDate: moment(date, dateFormat).format(prettyDate),
              endDate: moment(date, dateFormat)
                .add(
                  getDuration(edge.node.startTime, edge.node.endTime),
                  'milliseconds'
                )
                .format(prettyDate),
              startTime: formatTime(edge.node.startTime),
              endTime: formatTime(edge.node.endTime),
            },
          })
        })
      }
    })
  })
}
