import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BusinessCard from './Component/BusinessCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BusinessCard />
  </StrictMode>,
)
