import React, { useRef } from "react";
import { gsap } from "gsap";
import img1 from "../assets/img1.jpg";

const Hero = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseMove = (e, ref) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xPos = (clientX / innerWidth - 0.5) * 30; 
    const yPos = (clientY / innerHeight - 0.5) * 30;

    gsap.to(ref.current, {
      x: xPos,
      y: yPos,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-neutral-900 text-white">
    
      <div
        ref={textRef}
        className="p-20 text-left"
        onMouseMove={(e) => handleMouseMove(e, textRef)}
        onMouseLeave={() => handleMouseLeave(textRef)}
      >
        <h1 className="text-4xl font-bold mb-2">Welcome to my Portfolio!</h1>
        <h2 className="text-2xl">
          Hi! I am <span className="text-blue-400 font-semibold">Payal Verma</span>,
        </h2>
        <h2 className="text-2xl text-blue-400 font-semibold">Full Stack Web Developer</h2>
      </div>
      <img
        ref={imgRef}
        src={img1}
        alt="Hero Image"
        className="w-72 h-72 p-2 object-cover rounded-full border-4 border-blue-400"
        onMouseMove={(e) => handleMouseMove(e, imgRef)}
        onMouseLeave={() => handleMouseLeave(imgRef)}
      />
    </div>
  );
};

export default Hero;
