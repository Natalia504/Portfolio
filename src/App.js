import React, { Component } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import ProjectDetails2 from './components/ProjectDetails2';
import ProjectDetails3 from './components/ProjectDetails3';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>

          <Route exact path='/' component={Home} />
          <Route path='/myWork' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='/projectDetails' component={ProjectDetails} />
          <Route path='/projectDetails2' component={ProjectDetails2} />
          <Route path='/projectDetails3' component={ProjectDetails3} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
