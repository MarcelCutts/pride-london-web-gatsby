import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
// import PropTypes from 'prop-types'
import { Container, Row, Column } from '../grid'

const translateSubmenu = keyframes`

  0% {
    top: 80px;
    opacity: 0;
  }


  100% {
    top: 100px;
    opacity: 1;
  }

`

const StyledContainer = styled(Container)`
  background-color: ${props => props.theme.colors.lightIndigo};
  color: ${props => props.theme.colors.white};
  position: absolute;
  left: 0;
  right: 0;
  animation: ${translateSubmenu} 0.3s ease-in;
  top: 100px;
  z-index: 100;
  height: 298px;
`

const ColumnDivider = styled(Column)`
  border-right: 1px solid ${props => props.theme.colors.eucalyptusGreen};
`

const SubmenuText = styled.div`
  font-size: 48px;
  font-family: ${props => props.theme.fonts.title};
`
const SubmenuSubText = styled.div`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.body};
  margin-top: 25px;
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

const StyledUl = styled.ul`
  padding: 0;
`
const StyledListItem = styled.li`
  list-style: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.eucalyptusGreen};
  }
`

const ItemsTitle = styled.div`
  color: ${props => props.theme.colors.eucalyptusGreen};
  font-size: initial;
`

const SubmenuLeft = props => {
  const { item } = props
  return (
    item.submenu.items.hasOwnProperty('left') && (
      <StyledColumn flex={4.5} alignSelf="baseline">
        <StyledUl>
          {item.submenu.items.left.map(items => {
            return items.hasOwnProperty('title') ? (
              <StyledListItem>
                <ItemsTitle>{items.title}</ItemsTitle>
              </StyledListItem>
            ) : (
              <StyledListItem>{items}</StyledListItem>
            )
          })}
        </StyledUl>
      </StyledColumn>
    )
  )
}

const SubmenuRight = props => {
  const { item } = props

  return (
    item.hasOwnProperty('submenu') &&
    item.submenu.items.hasOwnProperty('right') &&
    item.submenu.items.hasOwnProperty('bottom') && (
      <StyledColumn flex={4.5} alignSelf="baseline">
        <StyledUl>
          {item.submenu.items.right.map(items => {
            {
              return items.hasOwnProperty('title') ? (
                <StyledListItem>
                  <ItemsTitle>{items.title}</ItemsTitle>
                </StyledListItem>
              ) : (
                <StyledListItem>{items}</StyledListItem>
              )
            }
          })}
          {item.submenu.items.bottom.map(items => {
            {
              return items.hasOwnProperty('title') ? (
                <StyledListItem>
                  <ItemsTitle>{items.title}</ItemsTitle>
                </StyledListItem>
              ) : (
                <StyledListItem>{items}</StyledListItem>
              )
            }
          })}
        </StyledUl>
      </StyledColumn>
    )
  )
}

const SubMenuItems = props => {
  const { item, verifyValue, mouseLeave } = props

  return (
    <StyledContainer onMouseLeave={mouseLeave}>
      <Row justifyContent="flex-start" alignItems="flex-start">
        <ContainerColumn>
          {verifyValue === item.text && (
            <Fragment>
              <Row
                justifyContent="flex-start"
                alignItems="flex-start"
                style={{ margin: 0 }}
              >
                <ColumnDivider
                  flex={7}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <SubmenuText>{item.text}</SubmenuText>
                  <SubmenuSubText>
                    {item.hasOwnProperty('submenu')
                      ? item.submenu.paragraph
                      : null}
                  </SubmenuSubText>
                </ColumnDivider>
                <SubmenuLeft item={item} />
                <SubmenuRight item={item} />
              </Row>
            </Fragment>
          )}
        </ContainerColumn>
      </Row>
    </StyledContainer>
  )
}

export default SubMenuItems
