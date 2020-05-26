import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddInput } from '../components/todo/AddInput';
import { TaskList } from '../components/todo/TaskList';
import {
  addTodo as addTodoAction,
  markTodo as markTodoAction
} from '../store/actions';
import { AppState, Todo } from '../store/types';

const todoComparator = (a: Todo, b: Todo): number => {
  if (a.done && !b.done) {
    return 1;
  }
  if (!a.done && b.done) {
    return -1;
  }
  console.log({ a, b });
  return a.time.getMilliseconds() - b.time.getMilliseconds();
};

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todos.todos.sort(todoComparator)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addTodo: (todo: string) => dispatch(addTodoAction(todo)),
    markTodo: (todo: string, done: boolean) =>
      dispatch(markTodoAction(todo, done))
  };
};

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const TodosPageComponent: React.FC<Props> = ({
  todos,
  addTodo,
  markTodo
}): JSX.Element => {
  return (
    <div>
      <AddInput addTodo={addTodo} />
      <TaskList todos={todos} markTodo={markTodo} />
    </div>
  );
};

export const TodosPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosPageComponent);
