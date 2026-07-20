import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Store } from './Utils/Store.js'
import { Provider } from "react-redux"


createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
        <App />
    </Provider>
)
