import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login/Login'
import { GlobalStyle } from './components/styles/GlobalStyle.style'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Login/>
  </React.StrictMode>,
)
