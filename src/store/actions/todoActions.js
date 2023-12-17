// todoActions.js
export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const addTodoSuccess = (payload) => ({
  type: ADD_TODO_SUCCESS,
  payload,
});

export const fetchTodos = () => ({
  type: FETCH_TODOS,
});

export const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  error,
});
