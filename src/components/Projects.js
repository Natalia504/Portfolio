import React, { Component } from 'react';
import Navigation from './../components/Navigation';
import './Projects.css';
import { Link } from 'react-router-dom';


export default class Projects extends Component {
  render() {
    return (
      <div className='main-container'>
        <Navigation />
        <div className='wrapper-main'>
          <div className='container-box-projects'>
            <h2 className='animated fadeIn'>My Work</h2>
            <p className='animated fadeIn'>This Portfolio is built from ground up and I'm planning on adding more projects to it. I never stop creating and always work on new projects to learn new tricks and technologies. Check out my recent projects below and <a href='https://s3.us-east-2.amazonaws.com/resume-natalia/NATALIA+CALT.pdf' target='_blank' rel='noopener noreferrer'>resume here.</a></p>
            <div className='project-container animated fadeIn'>
              
                <div className='box a'><h3>E-commerce project</h3>
                  <h5><a href='http://165.227.30.69:5050/' target='_blank' rel='noopener noreferrer'>Site Link</a><br/><a href="https://youtu.be/0zlThN-dr90" target='_blank' rel='noopener noreferrer'>Video Tour</a>
                    <br />React / Redux<br />Node / Express<br />PostreSQL<br />Stripe API<br />CSS3</h5>
                </div>
              
              <div className='box b'><h3>Flashcard App</h3>
                <h5><a href="https://youtu.be/342xlIa2_vc" target='_blank' rel='noopener noreferrer'>Video Tour</a><br />React / Redux<br />Node / Express<br />PostgeSQL<br />Auth0<br />CSS / SASS</h5>
              </div>
              
              <div className='box c'><h3>Omnifood Webpage</h3><h5><a href='https://nataliacalt-omnifood.firebaseapp.com/' target='_blank' rel='noopener noreferrer'>Site Link</a><br/>HTML5<br/>CSS3 <br/>jQuery</h5></div>
              
              <div className='box d'><h3>Work in progress...</h3>
              <h5>I'm currently building a new project in React <br/>but I'm not ready to share it yet.</h5></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
