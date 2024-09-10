import React from "react";
import ReactDOM from "react-dom/client";


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./routes/Home";
import Books from "./routes/Books";  // Supondo que o componente se chama "Books"

const router = createBrowserRouter([
    {
        path: "/books",
        element: <Books/>,
    },
    {
        path: "/home",
        element: <Home/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
