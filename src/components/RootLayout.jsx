import React from 'react'
import { Outlet } from 'react-router'
import Header from './header/Header'
import Save from '../component/Save'
import TheBox from '../component/TheBox'
import Footer from './footer/Footer'


export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />







        </>
    )
}
