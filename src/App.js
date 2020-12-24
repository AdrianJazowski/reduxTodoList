/** @format */

import React from "react";
import { TodoWrapper } from "./AppStyles";
import AddTodoForm from "./components/addTodoForm/AddTodoForm";
import ShowCounter from "./components/ShowCounter";
import TodoList from "./components/Todolist/TodoList";
import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoWrapper>
        <h1>Redux App</h1>
        <AddTodoForm />
        <TodoList />
        <ShowCounter />
      </TodoWrapper>
    </>
  );
};

export default App;
