import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// ms clarity
import Clarity from "@microsoft/clarity";
Clarity.init("x579v2bz7e");


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
    <StrictMode>
      <App />
    </StrictMode>
  
  </BrowserRouter>
)
