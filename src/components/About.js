import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { caretRight } from 'react-icons-kit/fa/caretRight';

const About = (props) => {
  return (
    <div className="about">
      <header>
        <h1 className="title">About</h1>
        <p className="subtitle">Through the looking glass</p>
      </header>
      <section>
        <article className="introduction">
          <h3>Introduction</h3>
          <p>{props.data.intro}</p>
        </article>
        <article className="skills">
          <h3>Some skills I know</h3>
          <div className="skills-wrap">
            <ul>
              <h4>Front End</h4>
              {props.data.skills.frontend.map(skill => (
                 <li key={skill} className="skill">
                   <Icon icon={caretRight} size={12} className="icon"/>{skill}
                 </li>
               ))}
            </ul>
            <ul>
              <h4>Back End</h4>
              {props.data.skills.backend.map(skill => (
                 <li key={skill} className="skill">
                   <Icon icon={caretRight} size={12} className="icon"/>{skill}
                 </li>
               ))}
            </ul>
            <ul>
              <h4>Development</h4>
              {props.data.skills.development.map(skill => (
                <li key={skill} className="skill">
                  <Icon icon={caretRight} size={12} className="icon"/>{skill}
                </li>
              ))}
            </ul>
          </div>
        </article>
        <article className="hobbies">
          <h3>When I'm not coding, I am probably...</h3>
          <ul>
            {props.data.hobbies.map(hobby => (
              <li key={hobby} className="hobby">
                <Icon icon={caretRight} size={12} className="icon"/>{hobby}
              </li>
            ))}
          </ul>
        </article>
        <article className="learn">
          <h3>Some things that I am keen on investigating</h3>
          <ul>
            {props.data.planningToLearn.map(newTech => (
              <li key={newTech} className="newSkills">
                <Icon icon={caretRight} size={12} className="icon"/>{newTech}
              </li>
            ))}
          </ul>
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
