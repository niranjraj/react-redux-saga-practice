// todoSaga.js
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchDataFromPlaceholder } from "../../util/api";
import {
  ADD_TODO,
  FETCH_TODOS,
  addTodoSuccess,
  fetchDataFailure,
  fetchDataSuccess,
} from "../actions/todoActions";

function* fetchTodos() {
  try {
    const todos = yield call(fetchDataFromPlaceholder);
    console.log(todos);
    yield put(fetchDataSuccess(todos));
  } catch (error) {
    console.log("error fetching");
    yield put(fetchDataFailure(error.message));
  }
}
function* handleAddTodo(action) {
  // Simulate an API call or any asynchronous operation
  const newTodo = {
    id: Date.now(),
    title: action.payload,
    completed: false,
  };
  yield put(addTodoSuccess(newTodo));
}

function* todoSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodos);
  yield takeEvery(ADD_TODO, handleAddTodo);
}

export default todoSaga;
