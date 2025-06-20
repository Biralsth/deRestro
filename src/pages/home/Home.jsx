import React from 'react'

import Display from './Display'
import Beschreibung from './Beschreibung'
import Menu from './Menu'
import ContactDeRestro from './ContactDeRestro'


export default function Home() {
    return (
        <div className='w-auto scale font-serif'>
            <Display />
            <Beschreibung />
            <Menu />
            <ContactDeRestro />


        </div>
    )
}

