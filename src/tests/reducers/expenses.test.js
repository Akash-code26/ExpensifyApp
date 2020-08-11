import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('Set Default State', () => {
    const state = expensesReducer(undefined, { type: '@@INNIT' })
    expect(state).toEqual([])
})

test('Remove Expense Correct Id ', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Remove Expense Wrong Id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '10'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})


test('Add Expense', () => {
    const expense = {
        id: '4',
        description: 'Rent',
        note: '',
        amount: 1000,
        createdAt: moment()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})


test('Edit Expense Correct Id', () => {
    const description = 'Coffee'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe(description)
})


test('Edit Expense Wrong Id', () => {
    const description = 'Coffee'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '4',
        updates: {
            description
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})