import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { githubSquare } from 'react-icons-kit/fa/githubSquare';
import { code } from 'react-icons-kit/fa/code';
import { externalLinkSquare } from 'react-icons-kit/fa/externalLinkSquare';

const Projects = (props) => {
  const featured = props.data.filter(project => project.featured === true);
  const nonfeatured = props.data.filter(project => project.featured !== true);

  return (
    <div className="projects">
      <header>
        <h1 className="title">Projects</h1>
        <p className="subtitle">Check out some of the things I've built</p>
      </header>
      <section>
        {featured.map(project => (
            <article key={project.title} className="featured project">
              <div className="project-image">
                <img src={`${project.image}`} alt=""/>
              </div>
              <div>
                <h2>{project.title}</h2>
                {project.liveLink ?
                  <a href={`${project.liveLink}`} target="_blank" rel="noopener noreferrer" className="gh"><Icon icon={externalLinkSquare} size={30}/></a> :
                  <a href={`${project.repoLink}`} target="_blank" rel="noopener noreferrer"><Icon icon={githubSquare} size={30} className="gh"/></a>
                }
                <span className="date">{project.date}</span>
                <p>{project.desc}</p>
                <ul className="tech-list">
                  {project.tech.map(tech => <li className="tech">{tech}</li>)}
                </ul>
              </div>
            </article>
        ))}

        <h1 className="other-title">Other Projects</h1>
        <div className="other">
          {nonfeatured.map(project => (
            <article key={project.title} className="project">
              <Icon icon={code} size={30} className="code"/>
              <a href={`${project.repoLink}`} target="_blank" rel="noopener noreferrer"><Icon icon={githubSquare} size={30} className="gh"/></a>
              <div>
                <h2>{project.title}</h2><span>{project.date}</span>
                <p>{project.desc}</p>
                <ul className="tech-list">
                  {project.tech.map(tech => <li className="tech">{tech}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

Projects.defaultProps = {
  data: [],
};

export default Projects;
