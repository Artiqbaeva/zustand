import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='mt-4'>
        <Header/>
        <main className='container mx-auto min-h-[80vh]'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default React.memo(Layout)