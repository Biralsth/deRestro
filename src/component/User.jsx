import React from 'react'

export default function User({ data }) {
    return (
        <div className='flex justify-start items-center  m-5'>
            <div className='flex flex-col flex-wrap'>
                <h1 className='text-3xl font-extrabold m-2'>{data.name}</h1>
                <p className='text-2xl font-bold m-2'>{data.desig}</p>

            </div>
            <div className='flex justify-between  m-5'>



                <img src={data.image} alt="" className='max-w-md mx-auto p-4 rounded-4xl bg-white  shadow-md shadow-amber-300' />
            </div>
        </div>
    )
}
