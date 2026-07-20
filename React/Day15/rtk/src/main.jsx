import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux"
import App from './App.jsx'
import { Store } from './Utils/Store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
        <App />
    </Provider>
)
