import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow } from 'enzyme'

import ImageBanner, { BackgroundImage } from './'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'

describe('ImageBanner', () => {
  it('should render', () => {
    const tree = renderer.create(<ImageBanner />)
    expect(tree).toMatchSnapshot()
  })

  it('should render a <BannerTitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerTitle)).toHaveLength(1)
  })

  it('should render a <BannerSubtitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerSubtitle)).toHaveLength(1)
  })

  it('should render an <img> if imageSrc is passed', () => {
    const wrapper = shallow(<ImageBanner imageSrc="test" />)
    expect(wrapper.find('img')).toHaveLength(1)
  })

  it('should not render an <img> if no imageSrc is passed', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find('img')).toHaveLength(0)
  })

  it('should render an img with imgSrc from props', () => {
    const imageSrc = 'http://www.image.com'
    const wrapper = shallow(<ImageBanner imageSrc={imageSrc} />)
    expect(wrapper.find('img').props().src).toBe(imageSrc)
  })

  it('should render an img with altText from props', () => {
    const altText = 'background image'
    const wrapper = shallow(<ImageBanner imageSrc="test" altText={altText} />)
    expect(wrapper.find('img').props().alt).toBe(altText)
  })

  it('should render the titleText from props to BannerTitle ', () => {
    const titleText = 'Here is a test title!'
    const wrapper = shallow(<ImageBanner titleText={titleText} />)
    expect(
      wrapper
        .find(BannerTitle)
        .dive()
        .find('span')
        .text()
    ).toBe(titleText)
  })

  it('should render the subtitleText from props to BannerTitle ', () => {
    const subtitleText = 'And here is a test subtitle!'
    const wrapper = shallow(<ImageBanner subtitleText={subtitleText} />)
    expect(
      wrapper
        .find(BannerSubtitle)
        .dive()
        .find('span')
        .text()
    ).toBe(subtitleText)
  })
})
