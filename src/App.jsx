import React from "react";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact"



import RootLayout from "./components/RootLayout";



export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        {
          path: '/',
          element: <Home />,


        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }


  ])






  return (
    <div >
      <RouterProvider router={router} />






    </div>
  )
}