import React from 'react'
import PropTypes from 'prop-types'
// import SubMenuItems from './subMenuItems'

const SubMenu = props => {
  console.log('submenu', props)
  const { item } = props
  return (
    <div>
      {item.text}
      {/* <SubMenuItems {...props}>{props.children}</SubMenuItems> */}
    </div>
  )
}

SubMenu.propTypes = {
  item: PropTypes.object.isRequired,
}

export default SubMenu
