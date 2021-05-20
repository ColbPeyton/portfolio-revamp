import React,{useContext, useState, useEffect} from 'react';
import {WidthContext, WidthState} from '../contexts/WidthContext';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreenSize';

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
                        className={`bee-container ${renderButtonAtYOffset()}`} 
                        onClick={()=> callParentScroll(props.refs.headerRef)}
                        >
                            <i className="fas fa-arrow-up"></i>
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
                        <i className="fas fa-arrow-up"></i>
                    </button>
                    <button onClick={()=> callParentScroll(props.refs.aboutRef)}>
                        <i className="far fa-user"></i>
                    </button>
                    <button onClick={()=> callParentScroll(props.refs.projectsRef)}>
                        <i className="fas fa-code-branch"></i>
                    </button>
                    <button onClick={()=> callParentScroll(props.refs.footerRef)}>
                        <i className="far fa-envelope"></i>
                    </button>
                </nav>
            </div>
        )
    }


    return (
        <div className='container-scroll'>
            {renderBasedOnScreen(width, mobileMarkup, desktopMarkup)}
        </div>
    )
}