/** @format */

import React from "react";
import { addTodo as addTodoAction } from "../../actions";
import { connect } from "react-redux";

const AddTodoForm = ({ addTodo }) => {
  const handleAddTodoForm = (e) => {
    e.preventDefault();

    const todoId = Math.floor(Math.random() * 1000);
    const todoName = e.target.todoName.value;

    const newTodo = {
      id: todoId,
      todoName,
      done: false,
      isEditing: false,
    };
    addTodo(newTodo);

    e.target.reset();
  };

  return (
    <div>
      <h2>Add todo:</h2>
      <form onSubmit={handleAddTodoForm}>
        <textarea type="textarea" placeholder="type todo..." name="todoName" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodoAction(todo)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
