import { ref, remove, update, get, push } from 'firebase/database';
 
import db from '../firebase/firebase';
 
//ADD_EXPENSE

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});
 
export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        
        // Setting up defaults
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
 
        const expense = { description, note, amount, createdAt };
        return push(ref(db, `users/${uid}/expenses`),
            expense
        ).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};
 
//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
 
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return remove(ref(db, `users/${uid}/expenses/${id}`))
            .then(() => {
                dispatch(removeExpense({ id }));
            });
    };
};
 
//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
 
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return update(ref(db, `users/${uid}/expenses/${id}`), updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};
 
//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});
 
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return get(ref(db, `users/${uid}/expenses`)).then((snapshot) => {
            const expensesData = [];
 
            snapshot.forEach(childSnapshot => {
                expensesData.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
 
            dispatch(setExpenses(expensesData));
        });
    };
};
