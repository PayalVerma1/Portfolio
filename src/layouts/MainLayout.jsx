import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
const MainLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-neutral-900 text-white">
    <Navbar />
    <Hero />
  </div>
  
  )
}

export default MainLayout