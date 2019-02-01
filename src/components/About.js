import React from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
  return (
    <div className="about">
      <header>
        <h1 className="title">About</h1>
        <p>Through the looking glass</p>
      </header>
      <section>
        <article className="introduction">
          <h3>Some skills I know</h3>
          <div className="skills-wrap">
            <ul>
              <h4>Front End</h4>
              {props.data.skills.frontend.map(skill => <li key={skill} className="skill">{skill}</li>)}
            </ul>
            <ul>
              <h4>Back End</h4>
              {props.data.skills.backend.map(skill => <li key={skill} className="skill">{skill}</li>)}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

About.defaultProps = {
  data: {},
};

export default About;
