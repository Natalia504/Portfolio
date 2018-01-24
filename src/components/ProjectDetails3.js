import React, { Component } from 'react';
import omnifood from '../Assets/omnifood/omnifood.png';
import omnifood2 from '../Assets/omnifood/omnifood2.png';
import omnifood3 from '../Assets/omnifood/omnifood3.png';
import omnifood4 from '../Assets/omnifood/omnifood4.png';
import omnifood5 from '../Assets/omnifood/omnifood5.png';
import omnifood6 from '../Assets/omnifood/omnifood6.png';
import './ProjectDetails.css';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Navigation from './../components/Navigation';


function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }]
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }]
      }}
      onClick={onClick}>
    </div>
  );
}

export default class ProjectDetails3 extends Component {


  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className='main-container container animated fadeIn'>
        <Navigation />
        <div className='wrapper-main'>
          <div className='project-name'>
            <h3>Omnifood: web page for a non-existing business<br/></h3>
          </div>
          <div className='project-name'>
              <h4><a href="#">Video Tour</a><br/>
              <a href='https://nataliacalt-omnifood.firebaseapp.com/' target='_blank' rel='noopener noreferrer'>Site Link</a></h4>
          </div>
          

          <Slider {...settings}>
            <div className='pic'>
              <img src={omnifood} alt="landing page" />
              <p className='legend'>Omnifood web page was built by following Udemy course on responsive design. It is built with HTML5, CSS3, and jQuery.</p>
            </div>
            <div className='pic'>
              <img src={omnifood2} alt="what we do" />
              <p className='legend'> </p>
            </div>
            <div className='pic'>
              <img src={omnifood3} alt="how it works" />
              <p className='legend'> </p>
            </div>
            <div className='pic'>
              <img src={omnifood4} alt="we are in these cities" />
              <p className='legend'></p>
            </div>
            <div className='pic'>
              <img src={omnifood5} alt="plans" />
              <p className='legend'> </p>
            </div>
            <div className='pic'>
              <img src={omnifood6} alt="mobile version" />
              <p className='legend'>The website is completely responsive: as the screen get's smaller the navigation menu turns into a "hamburger" menu with "open/close" functionality.</p>
            </div>
        
          </Slider>
        </div>
      </div>
    )
  }
}
