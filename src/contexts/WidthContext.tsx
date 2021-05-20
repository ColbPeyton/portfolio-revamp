import React,{createContext, useEffect, useState} from "react";
const defaultValue = 480;

interface WidthState{
    width: number;
}

export const WidthContext = createContext(defaultValue);

export const WidthProvider = (props:any):JSX.Element => {
    const [width, setWidth] = useState<WidthState['width']>(window.innerWidth);

    // Detect current window width and update.
    // Used to change markup for mobile or desktop across app
    const updateWidth = ():void => {
        setWidth(window.innerWidth);
    }

    useEffect(()=> {
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    });


    return(
        <WidthContext.Provider value={width}>
            {props.children}
        </WidthContext.Provider>
    )


}