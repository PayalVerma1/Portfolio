import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
const MainLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-neutral-900 text-white">
    <Navbar />
    <Hero />
    <About/>
    <Projects/>
  </div>
  
  )
}

export default MainLayout