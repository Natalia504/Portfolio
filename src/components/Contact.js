import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Navigation from './../components/Navigation';
import './Contact.css';
import Helmet from 'react-helmet';


export default class Contact extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false
        }
    }

    showNumber() {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <div className='main-container'>
                <Helmet>
                    <meta name='description' content='Natalia Calt - Contact' />
                    <title>Contact Me</title>
                </Helmet>
                <Navigation />
                <div className='wrapper-main'>
                    <div className='container-box-contact'>
                        <h2 className='animated fadeIn'>Contact Me</h2>
                        <div className='contact-icons animated fadeIn'>
                            <a className='icon-hover' href="https://github.com/Natalia504" target="_blank" rel='noopener noreferrer'>
                                <FontAwesome name='github' size='2x' />
                            </a>
                            <a className='icon-hover' href="mailto:natalia.calt@gmail.com?Subject=Message for Natalia" target="_blank" rel='noopener noreferrer'>
                                <FontAwesome name='envelope-square' size='2x' />
                            </a>
                            {this.state.clicked
                                ? (<a href="#top" onClick={() => this.showNumber()}>
                                    <div className='phone'> {'(504)450-2804'} </div>
                                </a>
                                ) : <a className='icon-hover' href="#top" onClick={() => this.showNumber()}>
                                    <FontAwesome name='phone-square' size='2x' />
                                </a>
                            }
                        </div>
                        <div className='about-me animated fadeIn'>
                            I'd love to chat with you over coffee about professional or educational opportunities. Contact me via email or phone number, or leave your contact information below.
                        </div>
                        <form method="POST" action="http://formspree.io/natalia.calt@gmail.com">
                            <div className='email-container animated fadeIn'>
                                <input className='text name' type="text" name="name" placeholder='Name' />
                                <input className='text email' type="email" name="email" placeholder='Email' />
                                <input className='text subject' type="text" name="subject" placeholder='Subject' />
                                <textarea className='text message' type="text" placeholder='Your Message' name="message" />
                                <button className='text btn' type="submit" >Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
