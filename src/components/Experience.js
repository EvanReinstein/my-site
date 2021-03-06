import React from 'react';

const Experience = (props) => (
  <div class="experience">
    <header>
      <h1 className="title">Experience</h1>
      <p className="subtitle">Positions that I have held:</p>
    </header>
    <section>
      {props.data.map(job => (
        <article className="job">
          <h2>{job.position}</h2>
          <a href={`${job.link}`} target="_blank" rel="noopener noreferrer" className="linked-text">{job.company}</a><span>{job.duration}</span>
          <p>{job.description}</p>
        </article>
      ))}
    </section>
  </div>
);

export default Experience;
