import React from 'react'

export default function Card(id) {
    return (
        <div className='p-5 m-5'>
            <p className='text-2xl'>"Hello {id.name}"</p>
            <p className='text-2xl'>"Your age is  {id.age}"</p>

        </div>
    )
}
