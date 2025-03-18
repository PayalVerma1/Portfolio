import React from 'react';

const About = () => {
  return (
    <section className="p-8 md:pl-24">
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