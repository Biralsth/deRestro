import React from 'react'
import { useState } from 'react'
import { Button } from '@material-tailwind/react'



export default function Home() {

    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount((prev) => prev + 1)

    }



    return (
        <div className=''>
            <h2>yo</h2>
            <h1>{count}</h1>
            <Button onclick={handleCount}>Click</Button>




        </div>
    )

}
