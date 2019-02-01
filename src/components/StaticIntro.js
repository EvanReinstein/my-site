import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const StaticIntro = () => (
    <div className="intro">
      <header>
        <h1 className="title sliding-vertical fadeinUp">
          <span>Hello!</span>
          <span>Bonjour!</span>
          <span>Ciao!</span>
          <span>Hola!</span>
          <span>Merhaba!</span>
        </h1>
      </header>
      <section>
        <p>Welcome!  Thanks for checking out my site.  Learn about me and projects I have worked on, or drop me a
           <NavLink to="/contact" className="link"> line!</NavLink>
        </p>
      </section>
    </div>
);

export default StaticIntro;
