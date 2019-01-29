import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './views/Main';

// CSS
import './styles/main.css';
import './styles/reset.css';

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root'));
