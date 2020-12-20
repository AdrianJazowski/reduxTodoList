/** @format */

import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  todos: [
    {
      id: 1,
      todoName: "first todo",
      done: false,
      isEditing: false,
    },
    {
      id: 2,
      todoName: "second todo",
      done: false,
      isEditing: false,
    },
  ],
  counter: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case actionsTypes.DELETE_TODO:
      const filteredTodos = state.todos.filter((todo) => {
        return todo.id !== payload;
      });
      return {
        ...state,
        todos: [...filteredTodos],
      };

    default:
      return state;
  }
};

export default reducer;
