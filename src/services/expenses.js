import {
  setExpenses, newExpense, editExpense, deleteExpense,
  setExpensesError, newExpenseError, editExpenseError, deleteExpenseError
} from '../app/expensesSlice';
import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/Expense`,
});

export const GetExpenses = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosInstance.get();

    dispatch(setExpenses(data));
  } catch (error) {
    dispatch(setExpensesError());
  }
}

export const NewExpense = async (dispatch, expense) => {
  try {
    //api call
    const { data } = await axiosInstance.post('', expense);
    dispatch(newExpense(data));
  } catch (error) {
    dispatch(newExpenseError());
  }
}

export const EditExpense = async (dispatch, expense) => {
  try {
    // api call 
    await axiosInstance.put('', expense);
    dispatch(editExpense(expense));
  } catch (error) {
    dispatch(editExpenseError());
  }
}

export const DeleteExpense = async (dispatch, expense) => {
  try {
    //api call
    await axiosInstance.delete('', { data: { ...expense } });
    dispatch(deleteExpense(expense));
  } catch (error) {
    dispatch(deleteExpenseError());
  }
}