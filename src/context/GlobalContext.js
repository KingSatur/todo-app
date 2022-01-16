import { createContext } from 'react';

export const globlalContext = createContext({
  toDoList: [
    {
      id: 1,
      title: 'First task',
      description: 'Some description',
      done: false,
    },
    {
      id: 2,
      title: 'Second task',
      description: 'Some description',
      done: true,
    },
  ],
});
