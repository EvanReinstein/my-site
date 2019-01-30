import React from 'react';

const Projects = (props) => {

  const featured = props.data.filter(project => project.featured === true);
  const nonfeatured = props.data.filter(project => project.featured !== true);
  console.log(featured);

  return (
    <div className="projects">
      <header>
        <h1 className="title">Projects</h1>
        <p>Check out some of the things I've built</p>
      </header>
      <section>

      </section>
    </div>
  );
};

export default Projects;
