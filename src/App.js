import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { Heading } from './components/Heading';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Heading />
      <Routes>
        <Route path="/" element={<TodoList />} index />
        <Route path="/add" element={<TodoForm />} />
      </Routes>
    </div>
  );
}

export default App;
