import selectExpenseTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('Should return 0 if no Expenses', () => {
    const total = selectExpenseTotal([])
    expect(total).toBe(0)
})

test('Should correctly addup a single expense', () => {
    const expectedAmount = expenses[0].amount
    const total = selectExpenseTotal([expenses[0]])
    expect(total).toBe(expectedAmount)
})

test('Should correctly addup multiple expenses', () => {
    const expectedAmount = expenses[0].amount + expenses[1].amount + expenses[2].amount
    const total = selectExpenseTotal(expenses)
    expect(total).toBe(expectedAmount)
})