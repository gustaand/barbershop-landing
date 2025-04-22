import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-calendar/dist/Calendar.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContextProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>,
)
