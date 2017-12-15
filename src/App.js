import React, { Component } from 'react';
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import ProjectDetails from './components/ProjectDetails'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css'

class App extends Component {


  render() {
    
    return (
      <BrowserRouter>
        <div>
          
          <Route exact path='/' component={Home} />
          <Route path='/myWork' component={Projects} />
          <Route path='/contact' component={Contact}/>
          <Route path='/projectDetails' component={ProjectDetails}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
