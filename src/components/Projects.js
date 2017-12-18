import React, { Component } from 'react';
import Navigation from './../components/Navigation';
import './Projects.css';
import { Link } from 'react-router-dom';


export default class Projects extends Component {
  render() {
    return (
      <div className='main-container'>
        <Navigation />
        <div className='wrapper-main '>
          <div className='container-box-projects'>
            <h2 className='animated fadeIn'>My Work</h2>
            <p className='animated fadeIn'>Here you'll find my <a href='https://s3.us-east-2.amazonaws.com/resume-natalia/NATALIA+CALT.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>. I always work on new projects to learn new technologies and tricks. Check out my recent projects below. I never stop creating!</p>
            <div className='project-container animated fadeIn'>
              <Link to='/projectDetails'><div className='box a'>
              </div></Link>
              <div className='box'>Coming soon</div>
              <div className='box'>Coming soon</div>
              <div className='box'>Coming soon</div>
              <div className='box'>Coming soon</div>
              <div className='box'>Coming soon</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
