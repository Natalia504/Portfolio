import React, { Component } from 'react';
import Navigation from './../components/Navigation';
import './Projects.css';
import { Link } from 'react-router-dom';


export default class Projects extends Component {
  render() {
    return (
      <div className='main-container'>
        <Navigation />
        <div className='wrapper-main-projects'>
          <div className='container-box-projects'>
            <h2 className='animated fadeIn'>My Work</h2>
            <div className='about-me animated fadeIn'>I never stop creating and always work on new projects to learn new tricks and technologies. Check out my recent projects below and <a href='https://s3.us-east-2.amazonaws.com/resume-natalia/NATALIA_CALT.pdf' target='_blank' rel='noopener noreferrer'><strong>RESUME</strong></a>.</div>
            <div className='project-container animated fadeIn'>

              <div className='box a'><h3>E-commerce project</h3><br />
                <h5>
                  <a href='http://165.227.30.69:5050/' target='_blank' rel='noopener noreferrer'>Site Link</a><br />
                  <a href="https://youtu.be/0zlThN-dr90" target='_blank' rel='noopener noreferrer'>Video Tour</a><br />
                  <a href="https://github.com/Natalia504/ecommerce-project" target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                  <h4>Technologies:</h4>
                  React / Redux<br />
                  Node / Express<br />
                  PostreSQL<br />
                  Stripe API<br />
                </h5>
              </div>

              <div className='box b'><h3>Flashcard App</h3><br />
                <h5>
                  <a href="https://youtu.be/342xlIa2_vc" target='_blank' rel='noopener noreferrer'>Video Tour</a><br />
                  <a href="https://github.com/flash-card-group-project/groupProject" target='_blank' rel='noopener noreferrer'>GitHub</a><br />
                  <h4>Technologies:</h4>
                  React / Redux<br />
                  Node / Express<br />
                  PostgeSQL<br />
                  Auth0<br />
                  CSS / SASS
                </h5>
              </div>

              <div className='box c'><h3>Omnifood Webpage</h3><br />
                <h5>
                  <a href='https://nataliacalt-omnifood.firebaseapp.com/' target='_blank' rel='noopener noreferrer'>Site Link</a><br />
                  <a href='https://github.com/Natalia504/omnifood' target='_blank' rel='noopener noreferrer'>GitHub</a>
                  <h4>Technologies:</h4>
                  HTML5<br />
                  CSS3 <br />
                  jQuery
              </h5>
              </div>

              <div className='box d'><h3>Weather App</h3><br />
                <h5>
                <a href='https://github.com/Natalia504/react-native-weatherApp' target='_blank' rel='noopener noreferrer'>Link to project</a><br />
                <h4>Technologies:</h4>
                  React-Native<br />
                  Weather Underground API<br />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
