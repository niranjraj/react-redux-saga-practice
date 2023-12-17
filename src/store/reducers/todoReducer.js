// reducers/todoReducer.js
import {
  ADD_TODO_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
} from "../actions/todoActions";

const initialState = {
  todos: [],
  error: null,
};

const todoReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        todos: action.payload, // Assuming the fetched data is an array of todos
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default todoReducer;
