// src/redux/modules/todos.js

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const GET_TODO_ID = "GET_TODO_ID";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

export const getTodoID = (payload) => {
  return {
    type: GET_TODO_ID,
    payload,
  };
};

const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트",
      contents: "휴",
      isDone: true,
    },
    {
      id: "2",
      title: "리액트",
      contents: "하",
      isDone: false,
    },
  ],

  todo: [
    {
      id: 0,
      title: "",
      contents: "",
      isDone: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    case GET_TODO_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };

    default:
      return state;
  }
};

export default todos;
