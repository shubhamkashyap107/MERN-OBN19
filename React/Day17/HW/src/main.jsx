import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux" 
import Store from './Utils/Store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={Store}>

        <BrowserRouter>
            <App />
        </BrowserRouter>

    </Provider>
)
