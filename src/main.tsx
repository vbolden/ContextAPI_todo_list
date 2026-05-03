import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TodoProvider from './providers/TodoProvider.tsx'
import FilterProvider from './providers/FilterProvider.tsx'
import ThemeProvider from './providers/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  </StrictMode>,
)
