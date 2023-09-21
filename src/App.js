import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Root from './routes/root.route';
import ErrorPage from './error-page';
import Contact from './routes/contact';
import Home from './routes/home';
import About from './routes/about';
import Assays from './routes/assays';
import Refining from './routes/refining';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "/about-us",
      //   element: <About />,
      // },
     
    ]
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/assays",
    element: <Assays />,
  },
  {
    path: "/refining",
    element: <Refining />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
 
]);
function App() {
  
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
