import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider as ReduxProvider} from "react-redux"
import { counterstore } from './Redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* below we are connect react with redux */}
    <ReduxProvider store={counterstore}>
    <App />
    </ReduxProvider>    
  </React.StrictMode>
)
