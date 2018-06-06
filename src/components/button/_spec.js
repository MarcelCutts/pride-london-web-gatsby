import React from 'react'
import { shallow } from 'enzyme'
import Button from './'

describe('Button component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should have property of colour xxx if primary', () => {})

  it('should fire correct method when set onClick property', () => {})

  it('should not be clickable if disabled', () => {})

  it('should match the corresponding sizes if small and wide are passed in as props', () => {})

  it('should redirect the page if button is link and to is defined', () => {})
})
