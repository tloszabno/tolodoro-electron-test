import React, { ChangeEvent } from 'react';
import { Input, ListGroupItem } from 'reactstrap';
import { Todo } from '../../store/types';
import { CheckboxWrapper, TaskContent } from './Task.styled';

type Props = {
  todo: Todo;
  markTodo: (todo: string, done: boolean) => unknown;
};

export const Task: React.FC<Props> = ({ todo, markTodo }): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.checked;
    markTodo(todo.text, value);
  };
  return (
    <ListGroupItem>
      <CheckboxWrapper>
        <Input type="checkbox" defaultChecked={todo.done} onChange={onChange} />
      </CheckboxWrapper>
      <TaskContent data-testid="todos">{todo.text}</TaskContent>
    </ListGroupItem>
  );
};
