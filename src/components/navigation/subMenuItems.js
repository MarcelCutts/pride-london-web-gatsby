import React, { Fragment } from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { Container, Row, Column } from '../grid'

const StyledContainer = styled(Container)`
  background-color: ${props => props.theme.colors.lightIndigo};
  color: ${props => props.theme.colors.white};
  position: absolute;
  left: 0;
  right: 0;
  height: 298px;
  top: 100px;
  z-index: 100;
`

const SubmenuText = styled.div`
  font-size: 48px;
  font-family: ${props => props.theme.fonts.title};
`

const StyledColumn = styled(Column)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
`

const ContainerColumn = styled(Column)`
  margin-top: 60px;
`
const SubmenuSubText = styled.div`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.body};
`
const StyledUl = styled.ul`
  padding: 0;
`
const StyledListItem = styled.li`
  list-style: none;
  text-align: left;
`

const SubMenuItems = props => {
  const { item, verifyValue, mouseLeave } = props

  return (
    <StyledContainer onMouseLeave={mouseLeave}>
      <Row justifyContent="flex-start" alignItems="flex-start">
        <ContainerColumn>
          {verifyValue === item.text && (
            <Fragment>
              <Row justifyContent="flex-start" alignItems="flex-start" mx={4}>
                <Column
                  flex={7}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <SubmenuText>{item.text}</SubmenuText>
                  <SubmenuSubText>
                    {item.submenu.paragraph && item.submenu.paragraph}
                  </SubmenuSubText>
                </Column>
                <StyledColumn flex={4.5} alignSelf="baseline">
                  <StyledUl>
                    {item.submenu.items.left.map(items => (
                      <StyledListItem>{items}</StyledListItem>
                    ))}
                  </StyledUl>
                </StyledColumn>
                <StyledColumn flex={4.5} alignSelf="baseline">
                  <StyledUl>
                    {item.submenu.items.right !== undefined &&
                      item.submenu.items.right.map(items => (
                        <StyledListItem>{items}</StyledListItem>
                      ))}
                  </StyledUl>
                </StyledColumn>
              </Row>
            </Fragment>
          )}
        </ContainerColumn>
      </Row>
    </StyledContainer>
  )
}

export default SubMenuItems
