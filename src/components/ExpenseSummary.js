import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'



export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount <= 1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('0,0.00')
    return (
        <h1>
            Viewing {expenseCount} {expenseWord} totalling Rs {formattedExpenseTotal}
        </h1>
    )


}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)