import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global-styles.css'

import { Home } from './pages/Home'
import { CounterContextProvider } from './contexts/CounterContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>
)