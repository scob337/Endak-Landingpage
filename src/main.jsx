import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayOut from './Components/MainLayOut.jsx'
import About from './pages/About/About.jsx'
import Services from './pages/Services/Services.jsx'
const router = createBrowserRouter([
  { path: '/', element: <MainLayOut /> ,
  children: [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <About /> },
    { path: '/services', element: <Services /> },
  ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
