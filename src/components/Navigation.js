import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Route, Link } from 'react-router-dom';
import './Navigation.css';




export default class Navigation extends Component {

    render() {
        let pointer = (<div className="animated fadeInUp" id="triangle"></div>)
        const MenuLink = ({ label, to, activeOnlyWhenExact, icon }) => (
            <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
                <div className='move-pointer' >
                    <Link style={{ color: '#696666' }} to={to}><FontAwesome className='icon' name={icon} size='3x' />
                        <p className='animated slideInDown' id='show-text'>{label}</p>
                        {match ? pointer : null}</Link>
                </div>
            )} />
        )
        return (
            <div className='wrapper-nav'>
                <div className='icons-container' >
                    <div className='icons' >
                        <ul>
                            <li>
                                <MenuLink activeOnlyWhenExact={true} to="/" label="Home" icon='home' />
                            </li>
                            <li>
                                <MenuLink to="/myWork" label="My Work" icon="folder" />
                            </li>
                            <li>
                                <MenuLink to="/contact" label="Contact" icon="envelope" />
                            </li>
                            <li className='move-pointer'><a href="https://www.linkedin.com/in/NataliaCalt/" target="_blank" rel='noopener noreferrer'>
                                <FontAwesome id='icon' style={{ color: '#696666' }} name="linkedin" size='3x' /><p className='animated slideInDown' id='show-text'>LinkedIn</p></a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
