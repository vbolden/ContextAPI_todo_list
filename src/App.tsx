import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App() {
  const themeContext = useContext(ThemeContext);

  if(!themeContext) return null;

  return (
    <>
      
    </>
  )
}

export default App
