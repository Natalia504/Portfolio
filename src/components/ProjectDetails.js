import React, { Component } from 'react'
// import { Carousel } from 'react-responsive-carousel'
import allItems from './../Assets/all-items.png'
import itemDetail from './../Assets/itemDetail.png'
import cartPage from './../Assets/cart-page.png'
import ScreenShot from './../Assets/Screen_Shot.png'
import profilePic from '../Assets/ProfilePic.jpg'
import './ProjectDetails.css'
// import styles from 'react-responsive-carousel/lib/styles/carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Navigation from './../components/Navigation';



function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }}]
        }}
        onClick={onClick}
      ></div>       
    );
    
    console.log("NEXT:", SampleNextArrow)
  }
  
  function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style }}
        onClick={onClick}
      ></div>
    );
  }

export default class ProjectDetails extends Component {
   

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
        return (
            <div className='main-container container animated fadeIn'>
                <Navigation/>
                
                <div className='wrapper-main'>
                <h3 id='project-title'>Ecommerce Personal Project</h3>
                <Slider {...settings}>
                    
                        <div className='pic'>
                        <img src={ScreenShot} alt="Home" />
                        <p className='legend'>Ecommerce web app built using React/Redux, Node.js, CSS and other technologies. Click here to see a video walkthrough. Click here to see the live web app.  </p>
                    </div>
                    <div className='pic'>
                        <img src={allItems} alt="all" />
                        <p className='legend'>"Cards" created using HTML5/CSS3, with FlexBox implementation. Click here to see a video walkthrough. Click here to see the live web app.</p>
                    </div>
                    <div className='pic'>
                        <img src={itemDetail} alt="item" />
                        <p className='legend'>Product details page. Click here to see a video walkthrough. Click here to see the live web app.</p>
                    </div>
                    <div className='pic'>
                        <img src={cartPage} alt="cart" />
                        <p className='legend'>Shopping Cart view. Upper right corner shows the total and number of items in the cart. Stripe implemented for secure transactions. Click here to see a video walkthrough. Click here to see the live web app.</p>
                    </div>
                    
                </Slider>
            </div>
            </div>
        )
    }
}
