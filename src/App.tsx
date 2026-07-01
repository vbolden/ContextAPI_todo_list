import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import ThemeButton from './components/ThemeButton'
import FilterButtons from './components/FilterButtons'


function App() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const theme = themeContext.theme;


  return (
    <div className={`container ${theme}`}
    >
      <h1>Todo App</h1>
      <ThemeButton />
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  )
}

export default App
