import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper

beforeEach(() => {
    startEditExpenseSpy = jest.fn()
    startRemoveExpenseSpy = jest.fn()
    historySpy = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage
        startEditExpense={startEditExpenseSpy}
        startRemoveExpense={startRemoveExpenseSpy}
        history={historySpy}
        expense={expenses[2]} />)

})

test("Render EditExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

test('should Handle Start edit Expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should Handle Start Remove Expense', () => {
    wrapper.find('button').simulate('click')
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[2].id })
})