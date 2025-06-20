import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./component/Header";

export default function App() {
  const router = createBrowserRouter([
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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <Header />
    </div>
  );
}

import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-400 text-white p-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">T-Rex</h1>

        <nav className="space-x-4">
          <a href={"/"} className="hover:text-gray-200">
            Home
          </a>
          <a href={"about"} className="hover:text-gray-200">
            About
          </a>
          <a href={"contact"} className="hover:text-gray-200">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
