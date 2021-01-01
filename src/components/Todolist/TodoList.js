/** @format */

import React from "react";
import { connect } from "react-redux";
import {
  deleteTodo as deleteTodoAction,
  completeTodo as completeTodoAction,
  editTodo as editTodoAction,
  saveEditedTodo as saveEditedTodoAction,
} from "../../actions";
import {
  TodoH2,
  TodoListUl,
  TodoListWrapper,
  TodoTitle,
  DeleteButton,
  ButtonsWrapper,
  TodoListLi,
  EditButton,
  NotDoneYetButton,
  DoneButton,
  SwitchedWrapperButton,
} from "./TodoListStyles";

const TodoList = ({ todos, deleteTodo, completeTodo, editTodo, saveTodo }) => {
  const handleEditTodoForm = (id, e) => {
    e.preventDefault();

    const newEditTodo = e.target.changeTodo.value;
    saveTodo(id, newEditTodo);
  };
  return (
    <TodoListWrapper>
      <TodoH2>Todo list</TodoH2>
      <TodoListUl>
        {todos.map((todo) => {
          const { id, todoName, done, isEditing } = todo;
          return (
            <TodoListLi key={id}>
              {isEditing ? (
                <form onSubmit={(e) => handleEditTodoForm(id, e)}>
                  <textarea
                    type="text"
                    placeholder="text..."
                    name="changeTodo"
                  />
                  <button type="submit">save</button>
                </form>
              ) : (
                <TodoTitle isDone={done}>{todoName}</TodoTitle>
              )}
              <ButtonsWrapper>
                <SwitchedWrapperButton onClick={() => completeTodo(id)}>
                  {done ? <NotDoneYetButton /> : <DoneButton />}
                </SwitchedWrapperButton>
                <EditButton onClick={() => editTodo(id)}>
                  {isEditing ? "stop Editing" : "start Editing"}{" "}
                </EditButton>
                <DeleteButton onClick={() => deleteTodo(id)}>
                  delete
                </DeleteButton>
              </ButtonsWrapper>
            </TodoListLi>
          );
        })}
      </TodoListUl>
    </TodoListWrapper>
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
    completeTodo: (id) => dispatch(completeTodoAction(id)),
    editTodo: (id) => dispatch(editTodoAction(id)),
    saveTodo: (id, name) => dispatch(saveEditedTodoAction(id, name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
