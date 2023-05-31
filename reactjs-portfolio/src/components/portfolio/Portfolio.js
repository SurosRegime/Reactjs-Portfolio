import React from 'react';

function Portfolio() {
  // This would ideally come from a state or a database
  const projects = [
    { title: 'Project 1', image: 'proj1.png', deployedUrl: '...', githubUrl: '...' },
    // Add more projects here
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <a href={project.deployedUrl}>Deployed App</a>
          <a href={project.githubUrl}>GitHub Repo</a>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
