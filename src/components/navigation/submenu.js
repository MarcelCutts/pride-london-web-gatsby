import React from 'react'
import PropTypes from 'prop-types'
import SubMenuItems from './subMenuItems'

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
  submenu: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    })
  ),
}

export default SubMenu
