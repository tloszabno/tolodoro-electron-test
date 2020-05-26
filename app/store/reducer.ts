import { TodoActions, TodosState } from './types';

const initialState: TodosState = {
  todos: []
};

export const reducer = (
  state: TodosState = initialState,
  action: TodoActions
): TodosState => {
  switch (action.type) {
    case 'ADD_TODO_ACTION':
      return {
        ...state,
        todos: state.todos.concat([
          {
            done: false,
            text: action.text,
            time: action.time
          }
        ])
      };
    case 'MARK_TODO_ACTION': {
      const todoToChange = state.todos.find(todo => todo.text !== action.text);
      const time = todoToChange ? todoToChange.time : new Date()
      const otherTodos = state.todos.filter(todo => todo.text !== action.text);
      const todos = otherTodos.concat([
        {
          done: action.done,
          text: action.text,
          time
        }
      ]);

      return {
        ...state,
        todos
      };
    }
    default:
      return state;
  }
};
