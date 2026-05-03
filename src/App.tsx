import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App() {
  const themeContext = useContext(ThemeContext);

  if(!themeContext) return null;

  const theme = themeContext.theme;


  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
