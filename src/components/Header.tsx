import React,{useContext} from 'react';
import { WidthContext, WidthState } from '../contexts/WidthContext';
import {renderBasedOnScreen} from '../_utils/renderBasedOnScreenSize';

export const Header = ():JSX.Element => {

    const width = useContext<WidthState['width']>(WidthContext);

    const mobileMarkup = ():JSX.Element => {
        return(
            <div className='header-mobile'>
                mobile
            </div>
        )
    }
    const desktopMarkup = ():JSX.Element => {
        return(
            <div className='header-desktop'>
                header
            </div>
        )
    }

    return(
        <div className='container-header'>
            {renderBasedOnScreen(width, mobileMarkup, desktopMarkup)}
        </div>
    )
}