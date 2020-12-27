/** @format */

import React from "react";
import { addTodo as addTodoAction } from "../../actions";
import { connect } from "react-redux";
import {
  AddFormH2,
  CustomForm,
  TextArea,
  PlusButton,
  ButtonWrapper,
} from "./AddTodoFormsStyles";

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
      <AddFormH2>Add todo:</AddFormH2>
      <CustomForm onSubmit={handleAddTodoForm}>
        <TextArea type="textarea" placeholder="type todo..." name="todoName" />
        <ButtonWrapper type="submit">
          <PlusButton />
        </ButtonWrapper>
      </CustomForm>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodoAction(todo)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
