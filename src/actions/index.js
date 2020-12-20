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

//skrócona wersja
// export const addTodo = () => ({

// })
