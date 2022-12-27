import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Events from './main_pages/Events'
import About from './main_pages/About'
import Blogs from './main_pages/Blogs'
import Contact_us from './main_pages/Contact_us'
import Faq from './main_pages/Faq'
import Admin from './Admin/Admin'
import '../src/index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import NotFound from './main_pages/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Events",
    element: <Events/>,
  },
  {
    path: "/Blogs",
    element: <Blogs/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Contact_us",
    element: <Contact_us/>,
  },
  {
    path: "/Admin",
    element: <Admin/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
  {
    path: "/Faq",
    element: <Faq/>,
  },  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
