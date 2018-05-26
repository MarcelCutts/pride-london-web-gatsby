import EventInfo from '../EventInfo'
import { shallow } from 'enzyme'
import React from 'react'

describe('Event info', () => {
  const wrappedComponent = shallow(<EventInfo content={'blah'} />)
  it('matches the screenshot', () => {
    expect(wrappedComponent).toMatchSnapshot()
  })
  it('The content matches the passed in text', () => {
    expect(wrappedComponent.text()).toEqual('blah')
  })
})
