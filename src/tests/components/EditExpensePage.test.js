import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper

beforeEach(() => {
    editExpenseSpy = jest.fn()
    startRemoveExpenseSpy = jest.fn()
    historySpy = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage
        editExpense={editExpenseSpy}
        startRemoveExpense={startRemoveExpenseSpy}
        history={historySpy}
        expense={expenses[2]} />)

})

test("Render EditExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

test('Render Handle edit Expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('Render Handle Start Remove Expense', () => {
    wrapper.find('button').simulate('click')
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[2].id })
})