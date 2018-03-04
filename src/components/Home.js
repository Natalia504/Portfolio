import React, { Component } from 'react';
import './Home.css';
import Navigation from './../components/Navigation';
import {Helmet} from 'react-helmet';



  export default class Home extends Component {

    render() {
  return (
      <div className='main-container'>
      <Helmet>
        <meta name='description' content='Natalia Calt - Home'/>
        <title>Natalia Calt</title>
        <link rel="canonical" href="https://www.nataliacalt.com" />
      </Helmet>
    <Navigation />
    <div className='wrapper-main'>
      <div className='container-box-home ' itemScope itemType={'http://schema.org/Person'}>
        <div className='container-left'>
          <div className='content animated'>
            <div className='name'><h1 className='animated fadeIn slideInLeft' itemProp={'name'}>Natalia Calt</h1></div>
            <div className='title'><h5 className='animated fadeIn slideInRight' itemProp={'jobTitle'}>Full Stack Web Developer</h5></div>
            <div className='about-me animated fadeIn' itemProp={'description'}>
              In search of an awesome team to learn from and interesting projects to contribute to.
            No one has time to read a wall of text about my life story, so let me tell you about myself in person...
                </div>
          </div>
        </div>
        <div className='container-right animated fadeIn' itemProp={'image'}>
        </div>
      </div>
      <div className='description animated fadeIn'>
        <p>And, when you want something, all the universe conspires in helping you to achieve it.
            </p>
        <h5 className='animated fadeIn'>&mdash;Paulo Coelho, The Alchemist
            </h5>
      </div>
    </div>
  </div>
  )
}
}

