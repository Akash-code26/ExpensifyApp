import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '../../components/NotFoundPage'

test('Render Not Found page', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})