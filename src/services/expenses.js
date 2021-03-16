import { ActionCreators } from '../app/expensesReducer';
import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.19/Expense',
});

export const GetExpenses = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosInstance.get();

    dispatch(ActionCreators.setExpenese(data));
  } catch (error) {
    console.log(error);
  }
}

export const NewExpense = async (dispatch, expense) => {
  try {
    //api call
    const { data } = await axiosInstance.post('', expense);
    dispatch(ActionCreators.newExpense(data));
  } catch (error) {
    console.log(error);
  }
}

export const EditExpense = async (dispatch, expense) => {
  try {
    // api call 
    await axiosInstance.put('', expense);
    dispatch(ActionCreators.editExpense(expense));
  } catch (error) {
    console.log(error);
  }
}

export const DeleteExpense = async (dispatch, expense) => {
  try {
    //api call
    await axiosInstance.delete('', { data: { ...expense } });
    dispatch(ActionCreators.deleteExpense(expense));
  } catch (error) {
    console.log(error);
  }
}