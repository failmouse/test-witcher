import React from 'react';
import './header.scss';
import Logo from '../images/logo.png';

export default function Header() {
    return(
        <header>
            <div className='container flexing'>
                <a href='/'> <img src={Logo} alt="logo" /> </a> 
                <a href="/request" className='red-btn'>
                    Подключить подписку
                </a>
            </div>
        </header>
    )
}