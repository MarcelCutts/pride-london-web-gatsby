import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'

import ImageBanner from './'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'

describe('ImageBanner', () => {
  it('should render', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a <BannerTitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerTitle)).toHaveLength(1)
  })

  it('should render a <BannerSubtitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerSubtitle)).toHaveLength(1)
  })

  it('should render a background image if passed an imageSrc prop', () => {
    const imageSrc = 'foo'
    const wrapper = shallow(<ImageBanner imageSrc={imageSrc} />)
    expect(wrapper.prop('style')).toEqual({backgroundImage: `url(${imageSrc})`})
  })

  it('should not render a background image if not passed an imageSrc prop', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.prop('style')).toEqual('')
  })

  it('should render an aria-label from props', () => {
    const altText = 'background image'
    const wrapper = shallow(<ImageBanner imageSrc="foo" altText={altText} />)
    expect(wrapper.props()['aria-label']).toBe(altText)
  })

  it('should render the titleText from props to BannerTitle ', () => {
    const titleText = 'Here is a test title!'
    const wrapper = shallow(<ImageBanner titleText={titleText} />)

    expect(wrapper).toMatchSnapshot()

    expect(
      wrapper
        .dive()
        .find(BannerTitle)
        .props().children
    ).toBe(titleText)
  })

  it('should render the subtitleText from props to BannerTitle ', () => {
    const subtitleText = 'And here is a test subtitle!'
    const wrapper = shallow(<ImageBanner subtitleText={subtitleText} />)

    expect(wrapper).toMatchSnapshot()
    expect(
      wrapper
        .dive()
        .find(BannerSubtitle)
        .props().children
    ).toBe(subtitleText)
  })
})
