import './globals.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
