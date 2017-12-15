import React, { Component } from 'react';
import profilePic from './../Assets/ProfilePic.jpg'
import './Home.css'
import Navigation from './../components/Navigation'


export default class Home extends Component {


   

  render() {
    return (
      <div className='main-container'>
      <Navigation/>
      <div className='wrapper-main'>


        <div className='container-box-home '>
            <div className='container-left'>
              <div className='content animated slideInDown'>
                <div className='name'><h1 className='animated slideInDown'>Natalia Calt</h1></div>
                <div className='title'><h3 className='animated slideInLeft'>Full Stack Web Developer</h3></div>
                <div className='description'><blockquote className='animated slideInRight'>"And, when you want something, all the universe conspires in helping you to achieve it." Paulo Coelho, The Alchemist</blockquote></div>
              </div>
            </div>

            <div className='container-right animated fadeIn'></div>
        </div>
        </div>
      </div>
    )
  }
}
