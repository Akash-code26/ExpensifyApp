import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let startAddExpenseSpy, historySpy, wrapper

beforeEach(() => {
    startAddExpenseSpy = jest.fn()
    historySpy = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpenseSpy} history={historySpy} />)

})

test('Render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Render Handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpenseSpy).toHaveBeenLastCalledWith(expenses[1])
})