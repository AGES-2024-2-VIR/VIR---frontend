import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./routes/Home";
import Books from "./routes/Books";

const router = createBrowserRouter([
  {
      path: "/", 
      element: <App />,
  },
  {
      path: "/Home", 
      element: <Home />,
  },
  {
      path: "/Books", 
      element: <Books />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);


