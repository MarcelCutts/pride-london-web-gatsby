module.exports = require('./events')

// import React, { Fragment } from 'react'
// import Link from 'gatsby-link'
//
// const Home = () => (
//   <Fragment>
//     <h1>Pride!!!!</h1>
//     <Link to="/events/">Events</Link>
//   </Fragment>
// )
//
// export default Home

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        appleAppId
      }
    }
  }
`
