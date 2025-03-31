import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "../layout/Header"; 
// Ensure the correct case


import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
