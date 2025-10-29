import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'rgba(15, 23, 42, 0.9)',
          color: '#f8fafc',
          border: '1px solid rgba(0, 255, 136, 0.3)',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)',
        },
        success: {
          iconTheme: {
            primary: '#00ff88',
            secondary: '#0f172a',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#0f172a',
          },
        },
      }}
    />
  </React.StrictMode>,
)