import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Home from './pages/Home.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ]
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
