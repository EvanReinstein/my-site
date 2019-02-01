import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import StaticIntro from "../components/StaticIntro";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

// Data
import data from "../data";

class Content extends Component {

    render () {
        return (
            <div className="content">
              <Switch>
                <Route path='/' exact component={StaticIntro}/>
                <Route path='/about' exact render={props => <About {...props} data={data.about}/>}/>
                <Route path='/projects' exact render={props => <Projects {...props} data={data.projects} />}/>
                <Route path='/experience' exact render={props => <Experience {...props} data={data.experience}/>}/>
                <Route path='/contact' exact render={props => <Contact {...props} data={data.contact}/>}/>
              </Switch>
            </div>
        )
    }
}

export default Content;
