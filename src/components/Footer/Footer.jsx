import React from 'react'
import './Footer.scss'
// import ft from '../../assets/images/footer.jpg'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/favicon-32x32.png';

function Footer() {
    return (
        <div className='footer'>
        <div className='footer__img'></div>
            <div className="footer__content">
                <div className="footer__content__logo">
                    
                    <Link to='/'> <img src={logo} alt="logo" />Ani Jikan</Link>
                </div>
            </div>
            <div className="footer__content__menus">
                <div className="footer__content__menu">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Contact us</Link>
                    <Link to='/'>Term of services</Link>
                    <Link to='/'>About us</Link>
                </div>
                <div className="footer__content__menu">
                    <Link to='/'>Live</Link>
                    <Link to='/'>FAQ</Link>
                    <Link to='/'>Premium</Link>
                    <Link to='/'>Pravacy policy</Link>
                </div>
                <div className="footer__content__menu">
                    <Link to='/'>You must watch</Link>
                    <Link to='/'>Recent release</Link>
                    <Link to='/'>Jikan</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer