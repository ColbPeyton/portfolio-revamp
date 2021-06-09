import React from 'react';
import '../styles/Footer.scss';

export const Footer = ():JSX.Element => {
    return(
        <footer className='container-footer'>
            <div className='footer-top'>
                <div className='footer-img'>
                    <img src={'images/profile_img.jpg'} alt='me' />
                </div>
                <div className='footer-tagline'>
                    <h3>Let's Work Together.</h3>
                </div>
            </div>
            <div className='footer-bot'>
                <div className='footer-name'>
                    <h3>Colby Peyton</h3>
                </div>
                <div className='footer-links'>
                    <a href='https://github.com/ColbPeyton' target='_blank' rel="noopener noreferrer">GitHub</a>
                    <a href='https://www.linkedin.com/in/colbypeyton/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:cpeyton.dev@gmail.com?subject=Let's Work Together">cpeyton.dev@gmail.com</a> 
                </div>
            </div>
        </footer>
    )
}