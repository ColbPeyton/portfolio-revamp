import React,{useContext, useState, useEffect} from 'react';
import {WidthContext, WidthState} from '../contexts/WidthContext';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreenSize';
import emailIcon from '../assets/icons/email.svg';
import aboutIcon from '../assets/icons/contact.svg';
import gitIcon from '../assets/icons/git.svg';
import arrowIcon from '../assets/icons/keyboard_arrow_right-24px.svg';
import '../styles/Scroll.scss';

interface ScrollProps{
    refs: {
        headerRef: React.RefObject<HTMLDivElement>;
        aboutRef: React.RefObject<HTMLDivElement>;
        projectsRef: React.RefObject<HTMLDivElement>;
        footerRef: React.RefObject<HTMLDivElement>;
    };
    scrollToComponent: (ref: any) => void;
}

interface ScrollState{
    height: number;
}

export const Scroll = (props:ScrollProps):JSX.Element => {

    const width = useContext<WidthState['width']>(WidthContext);
    const [height, setHeight] = useState<ScrollState['height']>(window.pageYOffset);

    // check current YOffset of page, render bee icon once threshold is met
    const updateHeight = () =>{
        setHeight(window.pageYOffset);
    }

    useEffect(()=>{
        window.addEventListener("scroll", updateHeight);
        return () => {
          window.removeEventListener("scroll", updateHeight);
        }
    })
  
    const renderButtonAtYOffset = ():string => {
        return height >= 150 
        ? 'active'
        : 'disabled'
    }

    const callParentScroll = (ref: React.RefObject<HTMLDivElement>):void => {
        props.scrollToComponent(ref);
    }

    const mobileMarkup = ():JSX.Element => {
        return(
            <div className='scroll-mobile'>
                <nav className='links'>
                    <button 
                        className={`up-arrow-container ${renderButtonAtYOffset()}`} 
                        onClick={()=> callParentScroll(props.refs.headerRef)}
                        >
                            <img src={arrowIcon} alt='arrow' />
                        </button>
                </nav>            
            </div>
        )
    }
    const desktopMarkup = ():JSX.Element => {
        return(
            <div className='scroll-desktop'>
                <nav className='links'>
                    <button onClick={()=> callParentScroll(props.refs.headerRef)}>
                        <img src={arrowIcon} alt='arrow'/>          
                    </button>
                    <button onClick={()=> callParentScroll(props.refs.aboutRef)}>
                        <img src={aboutIcon} alt='contact'/>          
                    </button>
                    <button onClick={()=> callParentScroll(props.refs.projectsRef)}>
                        <img src={gitIcon} alt='git'/>
                    </button>
                    <button onClick={()=> callParentScroll(props.refs.footerRef)}>
                        <img src={emailIcon} alt='email'/>
                    </button>
                </nav>
            </div>
        )
    }


    return (
            renderBasedOnScreen(width, mobileMarkup, desktopMarkup)
    )
}