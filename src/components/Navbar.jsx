import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const navbarRef = useRef(null);
  const linesRef = useRef([]);
  const sidebarLinksRef = useRef([]);
  const sidebarLineRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  linesRef.current = [];
  sidebarLinksRef.current = [];

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate Navbar from left to right (faster)
    tl.fromTo(
      navbarRef.current,
      { x: 20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,  // Reduced duration
        ease: "power3.out",
      }
    );

    // Sidebar Animations (Runs after Navbar)
    tl.fromTo(
      linesRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,  // Reduced duration
        stagger: 0.01,
        ease: "power3.out",
      }
    );

    tl.fromTo(
      sidebarLinksRef.current.slice(0, 3),
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,  // Reduced duration
        stagger: 0.01,
        ease: "power3.out",
      }
    );
    tl.from("NavLink",{
      y:-30,
      opacity:0,
      stagger:0.3,
    })

    tl.fromTo(
      sidebarLineRef.current,
      { height: 0, opacity: 0 },
      { height: "50px", opacity: 1, duration: 0.1, ease: "power3.out" }
    );

    tl.fromTo(
      sidebarLinksRef.current[3],
      { y: -20, opacity: 0 },
      { y: 20, opacity: 1, duration: 0.5, ease: "power3.out" }  // Reduced duration
    );
  }, []);

  const sideLinks = [
    { name: "TWITTER", color: "text-white" },
    { name: "DISCORD", color: "text-white" },
    { name: "LINKEDIN", color: "text-red-500" },
    { name: "FACEBOOK", color: "text-blue-400" },
  ];

  return (
    <div>
      {/* Left Sidebar */}
      <div className="fixed top-0 left-0 h-full w-16 bg-neutral-900 border-r border-white flex flex-col items-center pt-4">
        {/* Hamburger Menu */}
        <div className="flex flex-col gap-2 cursor-pointer mb-10">
          <div
            ref={(el) => (linesRef.current[0] = el)}
            className="w-12 h-1 bg-white rounded"
          ></div>
          <div
            ref={(el) => (linesRef.current[1] = el)}
            className="w-10 h-1 bg-white rounded"
          ></div>
          <div
            ref={(el) => (linesRef.current[2] = el)}
            className="w-11 h-1 bg-white rounded"
          ></div>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-center space-y-19 mt-6">
          {sideLinks.slice(0, 3).map(({ name, color }, index) => (
            <NavLink
              key={name}
              className={`hover:text-blue-400 ${color} text-lg font-bold rotate-270 vertical-text`}
              ref={(el) => (sidebarLinksRef.current[index] = el)}
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Sidebar Line */}
        <div
          ref={sidebarLineRef}
          className="w-[2px] min-h-[120px] bg-white my-6 mt-10 opacity-0"
        ></div>
        <NavLink
          className="text-blue-400 hover:text-white mt-2 mb-4 text-lg font-bold rotate-270 vertical-text"
          ref={(el) => (sidebarLinksRef.current[3] = el)}
        >
          GITHUB
        </NavLink>
      </div>

      {/* Top Navbar */}
      <nav
        ref={navbarRef}
        className="fixed top-0 right-0 text-white px-8 py-4 flex justify-end space-x-8 text-lg font-bold tracking-widest z-50 md:flex"
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className="hover:text-blue-400">
            HOME
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-400">
            ABOUT ME
          </NavLink>
          <NavLink to="/projects" className="hover:text-blue-400">
            PROJECTS
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-400">
            CONTACT
          </NavLink>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl"
        >
          {mobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 w-screen h-screen bg-neutral-900 text-white p-8 flex flex-col justify-between space-y-6 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <NavLink
          to="/"
          className="text-xl hover:text-blue-400"
          onClick={() => setMobileMenuOpen(false)}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className="text-xl hover:text-blue-400"
          onClick={() => setMobileMenuOpen(false)}
        >
          ABOUT ME
        </NavLink>
        <NavLink
          to="/projects"
          className="text-xl hover:text-blue-400"
          onClick={() => setMobileMenuOpen(false)}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/contact"
          className="text-xl hover:text-blue-400"
          onClick={() => setMobileMenuOpen(false)}
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;