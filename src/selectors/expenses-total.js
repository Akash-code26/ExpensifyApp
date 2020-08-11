
export default (filteredExpense) => {
    return filteredExpense
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0)
}