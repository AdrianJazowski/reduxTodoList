/** @format */

import { actionsTypes } from "./actionsTypes";

export const addTodo = (todo) => {
  return {
    type: actionsTypes.ADD_TODO,
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: actionsTypes.DELETE_TODO,
    payload: id,
  };
};
export const completeTodo = (id) => {
  return {
    type: actionsTypes.COMPLETE_TODO,
    payload: id,
  };
};
export const editTodo = (id) => {
  return {
    type: actionsTypes.EDIT_TODO,
    payload: id,
  };
};
export const saveEditedTodo = (id, name) => {
  return {
    type: actionsTypes.SAVE_TODO,
    payload: { id, name },
  };
};
