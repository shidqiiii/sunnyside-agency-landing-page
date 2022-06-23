import React from 'react'
import '../css/header/header.css';

export default function Header() {
    return (
        <header>
            <div className="header">
                <img src='./images/logo.svg' alt='foto' />
                <div className='header-left'>
                    <a href='#about'>About</a>
                    <a href='#service'>Services</a>
                    <a href='#project'>Projects</a>
                    <div className="header-left-div">
                        <a href='#contact' className='header-left-button'>contact</a>
                    </div>
                </div>
            </div>
            <div className='jumbotron'>
                <h1>We are creatives</h1>
                <img src="./images/icon-arrow-down.svg" alt="arrow" />
            </div>
        </header>
    )
}
