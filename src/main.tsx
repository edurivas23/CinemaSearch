import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { index } from './routes/index.tsx'
import './main.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={index} />
  </StrictMode>,
)
