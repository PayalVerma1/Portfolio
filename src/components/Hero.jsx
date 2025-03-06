import React from 'react';
import img1 from '../assets/img1.jpg'; // Import the image

const Hero = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-neutral-900 text-white'>
      {/* Left Section - Text */}
      <div className='p-20 text-left'>
        <h1 className='text-4xl font-bold mb-2'>Welcome to my Portfolio!</h1>
        <h2 className='text-2xl'>Hi! I am <span className="text-blue-400 font-semibold">Payal Verma</span>,</h2>
        <h2 className='text-2xl text-blue-400 font-semibold'>Full Stack Web Developer</h2>
      </div>

      {/* Right Section - Image */}
      <img src={img1} alt="Hero Image" className="w-72 h-72 p-2 object-cover rounded-full border-4 border-blue-400" />
    </div>
  );
};

export default Hero;
