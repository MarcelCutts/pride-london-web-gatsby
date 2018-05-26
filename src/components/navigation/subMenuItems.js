import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container, Row, Column } from '../grid/grid'

const StyledContainer = styled(Container)`
  background-color: ${props => props.theme.colors.beachBlue};
  color: ${props => props.theme.colors.white};
  position: absolute;
  left: 0;
  right: 0;
  top: 90px;
  z-index: 100;
`

const StyledRow = styled(Row)`
  height: 100%;
`
const StyledLi = styled.li`
  list-style: none;
`
const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`

const Items = props => {
  const { item } = props

  return <Row>{/* <div>{item.text}</div> */}</Row>
}

const Left = props => {
  const { items } = props
  return (
    <StyledContainer>
      <Row>
        <Column>
          <StyledUl>
            <StyledLi onMouseLeave={props.exitHover}>
              <Items items={items} />
            </StyledLi>
          </StyledUl>
        </Column>
      </Row>
    </StyledContainer>
  )
}

const SubMenuItems = props => {
  console.log(props)
  return <Left {...props} />
}

export default SubMenuItems
