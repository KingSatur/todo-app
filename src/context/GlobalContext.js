import { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {
  toDoList: [
    {
      id: 0,
      title: 'First task',
      description: 'Some description',
      done: false,
    },
    {
      id: 1,
      title: 'Second task',
      description: 'Some description',
      done: true,
    },
  ],
};

export const globalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addToDo = function (task) {
    dispatch({ type: 'ADD_TODO', payload: { ...task, id: state?.toDoList?.length } });
  };
  const removeToDo = function (id) {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };
  const editToDo = function (task) {
    dispatch({ type: 'EDIT_TODO', payload: task });
  };

  const toggleDone = function (id) {
    dispatch({ type: 'TOGGLE_DONE', payload: id });
  };

  return (
    <globalContext.Provider value={{ ...state, addToDo, removeToDo, editToDo, toggleDone }}>
      {children}
    </globalContext.Provider>
  );
};
