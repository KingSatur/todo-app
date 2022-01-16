import React, { useContext } from 'react';
import { globalContext } from '../context/GlobalContext';
import TodoItem from './TodoItem';

export const TodoList = () => {
  const { toDoList } = useContext(globalContext);
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        gap: '1rem',
      }}
    >
      {toDoList?.map((toDo, i) => {
        return <TodoItem key={i} {...toDo} />;
      })}
    </div>
  );
};
