import React from 'react'

export default function Beschreibung() {
    return (
        <a name="about">
            <div className=' p-4 mt-10 w-full  flex flrx-row flex-wrap-reverse justify-center items-center border-b border-gray-300'>
                <div className='p-4 w-full sm:w-1/2 md:w-1/3  flex justify-center items-center'>
                    <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt=""
                        className=' max-w-full h-auto rounded-xl shadow-inherit' />
                </div>
                <div className='p-4 w-full md:w-1/2 flex flex-col justify-center '>
                    <h1 className='text-5xl text-center tracking-wider p-1 m-2'>About Catering</h1>
                    <h3 className='text-2xl text-center tracking-wider p-2 m-2'>Tradition since 1889</h3>

                    <p className='p-2 m-2'>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>

                    <p className='p-2 m-2 opacity-50'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div></a>
    )
}
