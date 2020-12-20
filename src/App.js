/** @format */

import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import ShowCounter from "./components/ShowCounter";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h1>Redux App</h1>
      <AddTodoForm />
      <TodoList />
      <ShowCounter />
    </div>
  );
};

export default App;
