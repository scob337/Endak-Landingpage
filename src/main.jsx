import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayOut from './Components/MainLayOut.jsx'
const router = createBrowserRouter([
  { path: '/', element: <MainLayOut /> ,
  children: [
    { path: '/', element: <Home /> },
  ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
