import React from 'react';
import { ListGroup } from 'reactstrap';
import { Todo } from '../../store/types';
import { Task } from './Task';
import { TaskListContainer } from './TaskList.styled';

type Props = {
  todos: Todo[];
  markTodo: (todo: string, done: boolean) => unknown;
};

export const TaskList: React.FC<Props> = ({ todos, markTodo }): JSX.Element => {
  return (
    <TaskListContainer>
      <ListGroup>
        {todos.map(todo => (
          <Task todo={todo} key={todo.text} markTodo={markTodo}/>
        ))}
      </ListGroup>
    </TaskListContainer>
  );
};
