import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { Heading } from './components/Heading';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/GlobalContext';

function App() {
  return (
    <div>
      <ContextProvider>
        <Heading />
        <Routes>
          <Route path="/" element={<TodoList />} index />
          <Route path="/add" element={<TodoForm />} />
          <Route path="/edit/:id" element={<TodoForm />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
