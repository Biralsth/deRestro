


import React from "react";
import { NavLink } from "react-router";


export default function Header() {
    return (
        <header className="sticky top-0 z-50 shadow-2xl rounded-xl  bg-white  text-black p-4  font-serif ">
            <div className="  max-w-screen mx-auto  flex justify-between items-center shadow-2xl shadow-gray-900">
                <a href={'#'} className=" mx-5 text-xl  hover:bg-gray-200">Gourment au Catering</a>

                <nav className='space-x-6 hidden md:block '>

                    <a href={'#about'} className="hover:bg-gray-200 py-1 px-2">About</a>
                    <a href={'#menu'} className="hover:bg-gray-200 py-1 px-2">Menu</a>
                    <a href={'#contact'} className="hover:bg-gray-200 py-1 px-2">Contact</a>

                </nav>
            </div>
        </header>
    );
}
