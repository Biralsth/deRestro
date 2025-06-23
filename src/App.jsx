import React from 'react'
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from './pages/home/Home'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />

        },
      ],
    }

  ]);

  return <div className="">

    <RouterProvider router={router} />

  </div>

}
