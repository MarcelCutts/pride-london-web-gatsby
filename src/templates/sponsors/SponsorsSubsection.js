import React, { Fragment } from 'react'

const SponsorsSubsection = ({ title, icon, children }) => (
  <Fragment>
    <span>
      <img src={icon} alt="" />
      <h2>{title}</h2>
    </span>
    <div>{children}</div>
  </Fragment>
)

export default SponsorsSubsection
