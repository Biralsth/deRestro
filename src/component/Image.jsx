import React from 'react'

export default function User({ img }) {
    return (

        <div className='flex justify-between flex-wrap m-5'>


            <img src={img.imageLink} alt="" className='max-w-sm mx-auto p-4 bg-white shadow-md rounded-4xl ' />




        </div>
    )
}
