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
          <Route path={process.env.PUBLIC_URL + '/'} element={<TodoList />} index />
          <Route path={process.env.PUBLIC_URL + '/add'} element={<TodoForm />} />
          <Route path={process.env.PUBLIC_URL + '/edit/:id'} element={<TodoForm />} />
          <Route path="*" element={<Navigate to={process.env.PUBLIC_URL + '/'} />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
