/** @format */

import React from "react";
import { connect } from "react-redux";
import {
  deleteTodo as deleteTodoAction,
  completeTodo as completeTodoAction,
  editTodo as editTodoAction,
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
  SwitchedWrapperDiv,
} from "./TodoListStyles";

const TodoList = ({ todos, deleteTodo, completeTodo, editTodo }) => {
  return (
    <TodoListWrapper>
      <TodoH2>Todo list</TodoH2>
      <TodoListUl>
        {todos.map((todo) => {
          const { id, todoName, done, isEditing } = todo;
          return (
            <TodoListLi key={id}>
              <TodoTitle isDone={done}>{todoName}</TodoTitle>
              <ButtonsWrapper>
                <SwitchedWrapperDiv onClick={() => completeTodo(id)}>
                  {done ? <NotDoneYetButton /> : <DoneButton />}
                </SwitchedWrapperDiv>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
