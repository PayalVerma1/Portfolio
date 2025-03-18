import React from 'react';

const projects = [
  { id: 1, name: 'React-Jobs',img:'', description: 'A job portal where job seekers can apply for jobs and job providers can post job listings and accept applications.', link: '' },
  { id: 2, name: 'Project 2',img:'', description: 'Description of Project 2', link: '' },
  { id: 3, name: 'Project 3', img:'',description: 'Description of Project 3', link: '' },
 
];

const Projects = () => {
  return (
    <section className="p-8 md:pl-24">
      <header className="text-4xl flex justify-center font-bold mb-8">PROJECTS</header>
      <div className="flex space-x-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-gray-900 font-bold mb-2">{project.name}</h2>
            <p className="text-gray-700">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 font-bold mt-4 hover:underline"
              ></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;