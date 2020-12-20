/** @format */

import React from "react";
import { connect } from "react-redux";
import { deleteTodo as deleteTodoAction } from "../actions";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <h2>Todo list:</h2>
      <ul>
        {todos.map((todo) => {
          const { id, todoName } = todo;
          return (
            <li key={id}>
              <h4>{todoName}</h4>
              <button onClick={() => deleteTodo(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodoAction(id)),
  };
};

// wersja skrócona
// const mapStateToProps = (state) => ({
//   todos: state.todos,
// });

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
