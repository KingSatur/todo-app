import React, { useContext } from 'react';
import { globlalContext } from '../context/GlobalContext';
import TodoItem from './TodoItem';

export const TodoList = () => {
  const { toDoList } = useContext(globlalContext);
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        gap: '1rem',
      }}
    >
      {toDoList?.map((m) => {
        return <TodoItem />;
      })}
    </div>
  );
};
