import React, { Component } from 'react';
import landing from '../Assets/techDecks/techdecks.info1_landing.png';
import google from '../Assets/techDecks/techdecks.info3_google_signin_.png';
import menu from '../Assets/techDecks/techdecks.info5_menu.png';
import search from '../Assets/techDecks/techdecks.info6_search.png';
import myDecks from '../Assets/techDecks/techdecks.info7_myDecks.png';
import oneDeck from '../Assets/techDecks/techdecks.info8_oneDeck.png';
import question from '../Assets/techDecks/techdecks.info9_question.png';
import answer from '../Assets/techDecks/techdecks.info10_answer.png';
import favorites from '../Assets/techDecks/techdecks.info11_favorites.png';
import createDeck from '../Assets/techDecks/techdecks.info12_createDeck.png';
import createCard from '../Assets/techDecks/techdecks.info13_createCard.png';
import cardInDeck from '../Assets/techDecks/techdecks.info14_cardInDeck.png';
import './ProjectDetails.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Navigation from './../components/Navigation';


export default class ProjectDetails2 extends Component {


  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='main-container container animated fadeIn'>
        <Navigation />
        <div className='wrapper-main'>
          <div className='project-name'>
            <h3> Group Project: TechDecks &mdash; flashcard app <br/></h3>
          </div>
          <div className='project-name'>
              <h4><a href="https://youtu.be/342xlIa2_vc" target='_blank' rel='noopener noreferrer'>Video Tour</a><br/>
            </h4>
          </div>
          

          <Slider {...settings}>
            <div className='pic2'>
              <img src={landing} alt="landing page" />
              <p className='legend'>TechDecks was built in a group of five student-developers. This app is built in React.js/Redux, Node.js/Express, PostgreSQL, MaterialUI, CSS/SASS.</p>
            </div>
            <div className='pic2'>
              <img src={google} alt="login with google" />
              <p className='legend'>Auth0 technology was implemented to give users the option to login with other social media accounts such as Google or Facebook. </p>
            </div>
            <div className='pic2'>
              <img src={menu} alt="menu" />
              <p className='legend'>Once logged-in, the user can create a new deck of flashcards or search for decks created by other users. </p>
            </div>
            <div className='pic2'>
              <img src={search} alt="search" />
              <p className='legend'>Home >> Menu >> Search <br/>The user can search by the deck's name.  The option to add the deck to the list of favorites is available, as well as 'make it private', 'edit deck', or 'delete deck' if the deck was created by a current user. 'Private' option removes the deck from the search results. </p>
            </div>
            <div className='pic2'>
              <img src={myDecks} alt="myDecks" />
              <p className='legend'>Home >> Menu >> My Decks <br/>This component shows all the decks created by the user. </p>
            </div>
            <div className='pic2'>
              <img src={oneDeck} alt="oneDeck" />
              <p className='legend'>Home >> Menu >> My Decks >> Click on the deck <br/>By clicking on the deck, the user is shown the list of cards in that deck. The option to create more cards in current deck or create a sub-deck(by clicking the toggle button) is available. The user can review/study flashcards by clicking "Study!" button. </p>
            </div>
            <div className='pic2'>
              <img src={question} alt="question" />
              <p className='legend'>Face of the card shows the question. Click "See Answer" to check if you got it correctly. </p>
            </div>
            <div className='pic2'>
              <img src={answer} alt="answer" />
              <p className='legend'>Back of the card shows the answer. </p>
            </div>
            <div className='pic2'>
              <img src={favorites} alt="favorites" />
              <p className='legend'>Home >> Menu >> Favorites <br/>The list of favorite decks is shown here.  </p>
            </div>
            <div className='pic2'>
              <img src={createDeck} alt="createDeck" />
              <p className='legend'>'Create Deck' button triggeres a module to pop-up. Enter a deck name and a category to create a new deck. </p>
            </div>
            <div className='pic2'>
              <img src={createCard} alt="createCard" />
              <p className='legend'>Once a new deck is created, another two options are available to the user - create a card or create a sub-deck to narrow down the subject of study. In this case we are creating a card. </p>
            </div>
            <div className='pic2'>
              <img src={cardInDeck} alt="cardInDeck" />
              <p className='legend'>Newly created card is shown in the deck.</p>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
