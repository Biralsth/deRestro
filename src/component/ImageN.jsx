import React from 'react'

export default function ImageN({ rex }) {
    return (

        <div className='p-5 m-5 max-w-fit flex  justify-between'>

            <div>
                <img src={rex.imgLink} alt="" className=' p-4 bg-white  rounded-4xl ' />
            </div>
        </div>

    )
}
