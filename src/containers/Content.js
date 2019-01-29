import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import StaticIntro from "../components/StaticIntro";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

class Content extends Component {

    render () {
        return (
            <div>
              <Switch>
                <Route path='/' component={StaticIntro}/>
                <Route path='/About' component={About}/>
                <Route path='/Projects' component={Projects}/>
                <Route path='/Experience' component={Experience}/>
                <Route path='/Contact' component={Contact}/>
              </Switch>
            </div>
        )
    }
}

export default Content;
