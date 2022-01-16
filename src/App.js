import './App.css';
import { Heading } from './components/Heading';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/GlobalContext';

function App() {
  return (
    <div>
      <ContextProvider>
        <Heading />
        <Routes>
          <Route path={'/'} element={<TodoList />} index />
          <Route path={'/add'} element={<TodoForm />} />
          <Route path={'/edit/:id'} element={<TodoForm />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
