import React from 'react';
import menu from '../images/icon-menu.svg'
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import '../App.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='menu-toggler'>
                <img src={ menu } alt='' />
            </div>
            <div className='logo-section'>
                <div>
                    <img src={ logo } alt='' />
                </div>
            </div>
            <div className='nav-items'>
                <a className='nav-link' href=''>Collections</a>
                <a className='nav-link' href=''>Men</a>
                <a className='nav-link' href=''>Women</a>
                <a className='nav-link' href=''>About</a>
                <a className='nav-link' href=''>Contact</a>
            </div>
            <div className='avatar-container'>
                <div>
                    <img className='cart-icon' src={ cart } alt='' />
                </div>
                <div className='avatar-img-container'>
                    <img className='avatar-img' src={ avatar } alt='' />
                </div>                
            </div>
        </div>
    );
}

export default Header;