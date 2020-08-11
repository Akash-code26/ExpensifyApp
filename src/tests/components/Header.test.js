import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'

test('Header Render', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    // const renderer = new ShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()

})