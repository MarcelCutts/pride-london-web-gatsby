import React from 'react'
import { shallow } from 'enzyme'
import NavItems from '../navItems'
import shortid from 'shortid' //eslint-disable-line no-unused-vars
jest.mock('shortid', () => ({ generate: jest.fn().mockReturnValue('mockId') }))

describe('header', () => {
  it('matches snapshot', () => {
    const mockProps = {
      items: {
        listItems: ['Shante, you stay', 'Sashay away'],
      },
    }
    const wrappedComponent = shallow(<NavItems {...mockProps} />)
    expect(wrappedComponent).toMatchSnapshot()
  })
  it('presents three links when three listItems passed', () => {
    const mockProps = {
      items: {
        listItems: [
          'Shante, you stay',
          'Sashay away',
          "how can you love someone else if you don't love yourself",
        ],
      },
    }
    const wrappedComponent = shallow(<NavItems {...mockProps} />)
    expect(wrappedComponent.find('LinkTest')).toHaveLength(3)
  })
  it('presents one button', () => {
    const mockProps = {
      items: {
        listItems: [],
      },
    }
    const wrappedComponent = shallow(<NavItems {...mockProps} />)
    expect(wrappedComponent.find('ButtonTest')).toHaveLength(1)
  })
})
