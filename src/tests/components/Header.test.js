import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'


let startLogoutSpy, wrapper

beforeEach(() => {
    startLogoutSpy = jest.fn()
    wrapper = shallow(<Header startLogout={startLogoutSpy} />)
})


test('Header Render', () => {
    expect(wrapper).toMatchSnapshot()
    // const renderer = new ShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
    wrapper.find('button').simulate('click')
    expect(startLogoutSpy).toHaveBeenCalled()
})

