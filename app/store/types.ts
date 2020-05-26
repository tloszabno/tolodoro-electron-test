export type Todo = {
  text: string;
  done: boolean;
  time: Date;
};

export type AddTodo = {
  type: 'ADD_TODO_ACTION';
  text: string;
  time: Date
};

export type MarkTodo = {
  type: 'MARK_TODO_ACTION';
  text: string;
  done: boolean;
};

export type TodosState = {
  todos: Todo[];
};

export type TodoActions = AddTodo | MarkTodo;

export type AppState = {
  todos: TodosState;
};
