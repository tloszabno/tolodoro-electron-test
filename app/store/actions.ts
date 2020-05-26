import { AddTodo, MarkTodo } from './types';

export const addTodo = (todo: string): AddTodo => {
  return {
    type: 'ADD_TODO_ACTION',
    text: todo,
    time: new Date()
  };
};

export const markTodo = (todo: string, done: boolean): MarkTodo => {
  return {
    type: 'MARK_TODO_ACTION',
    text: todo,
    done
  };
};
