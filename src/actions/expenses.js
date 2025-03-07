import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase'

// Add Expense
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}


// Remove Expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})


const startRemoveExpense = ({ id } = {}) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}

// Edit Expense 
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}


// Set Expenses
const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

// export const startSetExpenses
const startSetExpenses = () => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = []
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })

    }
}


export {
    addExpense,
    removeExpense,
    editExpense,
    setExpenses,
    startSetExpenses,
    startAddExpense,
    startEditExpense,
    startRemoveExpense
}
