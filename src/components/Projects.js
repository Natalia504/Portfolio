import React, { Component } from 'react'
import Navigation from './../components/Navigation'
import './Projects.css'
import homePage from './../Assets/home_page_resized.png'
import {Link} from 'react-router-dom'

// import allItems from './../Assets/all-items.png'


export default class Projects extends Component {
  render() {
    return (
      <div className='main-container'>
        <Navigation />
        <div className='wrapper-main '>
          <div className='container-box-projects'>
            <h2 className='animated fadeIn'>My Work</h2>
            <p className='animated fadeIn'>Phasellus enim sapien, blandit <a href='https://s3.us-east-2.amazonaws.com/random-docs/NATALIA+CALT.pdf' target='_blank' rel='author'>Resume</a> elementum eu, condimentum eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia luctus elit eget interdum.</p>

            <div className='project-container animated fadeIn'>
            
              {/* <a classname='animated fadeIn' href={'http://165.227.30.69:5050/'} target='_blank' rel='author'>
                <div className='box a'>
                </div>
              </a> */}
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
