import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { AddInputContainer } from './AddInput.styled';

type Props = {
  addTodo: (todo: string) => unknown;
};

export const AddInput: React.FC<Props> = ({ addTodo }): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const onEnter = () => {
    addTodo(value);
    setValue('');
  };

  return (
    <AddInputContainer>
      <Input
        id="addtodo"
        placeholder="Add new task"
        onChange={e => setValue(e.target.value)}
        value={value}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            onEnter();
          }
        }}
      />
    </AddInputContainer>
  );
};
