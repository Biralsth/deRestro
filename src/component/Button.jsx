import React from 'react'

export default function Button({ lable, color }) {
    return (
        <div className='p-5 m-5 rounded' >
            <button className={` text-white px-3 py-1 rounded ${color}`}>{lable}</button>
        </div>
    )
}
