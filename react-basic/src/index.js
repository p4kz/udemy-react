import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global-styles.css'

import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)