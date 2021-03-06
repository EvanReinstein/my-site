import React from 'react';
import { Icon } from 'react-icons-kit';
import data from '../data/';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <section className="header">
        <h1>Evan Reinstein</h1>
        <p><a href="mailto:edreins@gmail.com" className="linked-text">edreins@gmail.com</a></p>
      </section>
      <section className="sidebar-blurb">
        <p>Hey, I'm Evan, a former middle school math teacher turned Web Developer.  Right now I'm working on building custom Alexa skills to learn about AWS and Lambda Functions.</p>
      </section>
      <section className="sidebar-contact">
        <ul>
          {data.contact.map(icon =>
            <li key={icon.label} className="link">
              <a href={`${icon.link}`} target="_blank" rel="noopener noreferrer">
                <Icon icon={icon.icon} size={18}/>
              </a>
            </li>)}
        </ul>
        <p className="copyright">&copy; Evan Reinstein 2019</p>
      </section>
    </div>
  )
}

export default Sidebar;
