import React, { Component } from 'react';
import './Home.css';
import Navigation from './../components/Navigation';


export default class Home extends Component {

  render() {
    return (
      <div className='main-container'>
        <Navigation />
        <div className='wrapper-main'>
          <div className='container-box-home '>
            <div className='container-left'>
              <div className='content animated'>
                <div className='name'><h1 className='animated fadeIn slideInLeft'>Natalia Calt</h1></div>
                <div className='title'><h4 className='animated fadeIn slideInRight'>Full Stack Web Developer</h4></div>
                <div className='about-me animated fadeIn'>
                No one reads "about me" section.
                  Let me tell you about myself in person...
                </div>
              </div>
            </div>
            <div className='container-right animated fadeIn'>
            </div>
          </div> 
          <div className='description animated fadeIn'><blockquote>And, when you want something, all the universe conspires in helping you to achieve it.</blockquote>
          <cite className='animated fadeIn'>&mdash;Paulo Coelho, The Alchemist</cite>
          </div>
        </div>
      </div>
    )
  }
}

 