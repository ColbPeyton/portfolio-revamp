import React from 'react';
import headerLarge from '../assets/background/header_img_large.png';
import downArrow from '../assets/icons/keyboard_arrow_right-24px.svg';

import '../styles/Header.scss';

interface HeaderProps{
    aboutRef: React.RefObject<HTMLDivElement>;
    scrollToComponent: (ref: any) => void;
}

export const Header = (props:HeaderProps):JSX.Element => {

    return(
        <header className='container-header'>
            <div className='container-header-markup'>
                <div className='header-image'>
                    <img src={headerLarge} alt='me working on a project'/>
                </div>
                <div className='header-content'>
                    <div className='header-title'>
                        <h1>Hi.</h1>
                        <h1>I'm Colby.</h1>
                    </div>
                    <div className='header-info'>
                        <p>
                            I'm a Web Developer with a passion for problem solving. 
                            Scroll to learn more and see what I'm working on.
                        </p>
                    </div>
                    <div className='header-button'>
                        <button onClick={()=> props.scrollToComponent(props.aboutRef)}>
                            <img src={downArrow} alt='down arrow'/>
                        </button>
                    </div>
                </div>              
            </div>
        </header>
    )
}