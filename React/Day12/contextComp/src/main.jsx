import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterContextProvider } from './Utils/CounterContext.jsx'
import { ListContextProvider } from './Utils/ListContext.jsx'

createRoot(document.getElementById('root')).render(
    <CounterContextProvider>
        <ListContextProvider>
            <App />
        </ListContextProvider>
    </CounterContextProvider>
)
