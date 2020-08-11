import React from 'react'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import { shallow } from 'enzyme'

test('should correctly render ExpenseSummary with 1 expense', () => {

    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenseSummary with multiple expenses', () => {

    const wrapper = shallow(<ExpenseSummary expenseCount={21} expenseTotal={23123123125} />)
    expect(wrapper).toMatchSnapshot()
})

