import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const aboutRef=useRef(null);
React.useEffect(() => {
  const element = aboutRef.current;

  gsap.fromTo(
    element,
    { opacity: 0, y: 50, backgroundColor: '#ffffff' ,width:'10%',borderRadius: '0%'},
    {
      opacity: 1,
      y: 0,
      backgroundColor: '#f8f9fa',
      duration: 3,
      width:'80%',
      borderRadius: '10%',
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
        end: 'top 50%',
        toggleActions: 'play none none none',
        scrub: true,
      },
    }
  );

  gsap.to(element, {
    backgroundColor: '#0F172A',
    duration: 2,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  });
}, []);
  return (
    <section ref={aboutRef} className="md:pl-24 p-6 justify-center items-center flex flex-col ">
      <header className="text-4xl font-bold mb-4">ABOUT ME</header>
      <article className="mt-4 text-lg leading-relaxed">
        <p>
          Hello! I am currently pursuing a Bachelor of Technology (B.Tech) in Information Technology from KIET Group of Institutions, Ghaziabad. I am based in Ghaziabad and have a strong passion for web development.
        </p>
        <p className="mt-4">
          My interest in web development stems from my love for creating things. I enjoy the process of creation and the satisfaction of seeing the end product. This passion for creation has driven me to become a full stack developer with hands-on experience in various technologies.
        </p>
        <p className="mt-4">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Next.js</li>
          <li>GSAP</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
        </ul>
      </article>
    </section>
  );
};

export default About;