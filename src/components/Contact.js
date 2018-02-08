import React, { Component } from 'react';
import Navigation from './../components/Navigation';
import './Contact.css';


export default class Contact extends Component {

    render() {
        return (
            <div className='main-container'>
                <Navigation />
                <div className='wrapper-main'>
                    <div className='container-box-contact'>
                        <h2 className='animated fadeIn'>Contact Me</h2>
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
