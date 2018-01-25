import React, { Component } from 'react';
import allItems from './../Assets/ecommerce/all-items.png';
import itemDetail from './../Assets/ecommerce/itemDetail.png';
import cartPage from './../Assets/ecommerce/cart-page.png';
import ScreenShot from './../Assets/ecommerce/Screen_Shot.png';
import './ProjectDetails.css';
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
            breakpoint: 480,
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

export default class ProjectDetails extends Component {


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
            <h3> Personal Project: E-commerce clone</h3>
          </div>
          <div className='project-name'>
              <h4><a href="#">Video Tour</a><br/>
            <a href='http://165.227.30.69:5050/' target='_blank' rel='noopener noreferrer'>Site Link</a></h4>
          </div>
          

          <Slider {...settings}>
            <div className='pic'>
              <img src={ScreenShot} alt="Home" />
              <p className='legend'>Ecommerce web app built using React/Redux, Node.js/Express, PostrgeSQL and other technologies. The navigation bar on top allows users to search for a specific item, as well as search items by category.</p>
            </div>
            <div className='pic'>
              <img src={allItems} alt="all" />
              <p className='legend'>"Cards" created using HTML5/CSS3, with FlexBox implementation. Clicking on the "card" will take you to the product details page. User can also add items to the cart, which will show in the upper right corner the total and the number of items currently in the cart. </p>
            </div>
            <div className='pic'>
              <img src={itemDetail} alt="item" />
              <p className='legend'>Product details page allow you to inspect the item's details and Add it to the cart. </p>
            </div>
            <div className='pic'>
              <img src={cartPage} alt="cart" />
              <p className='legend'>Shopping Cart view. Upper right corner shows the total and number of items in the cart. Stripe technology implemented for secure transactions. </p>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
