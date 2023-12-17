import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { fetchTodos } from "./store/actions/todoActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
