/** @format */

import React from "react";
import { CustomH1, TodoWrapper } from "./AppStyles";
import AddTodoForm from "./components/addTodoForm/AddTodoForm";
import ShowCounter from "./components/ShowCounter";
import TodoList from "./components/Todolist/TodoList";
import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoWrapper>
        <CustomH1>Redux App</CustomH1>
        <AddTodoForm />
        <TodoList />
        <ShowCounter />
      </TodoWrapper>
    </>
  );
};

export default App;
