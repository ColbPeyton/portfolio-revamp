import React from 'react';

interface TimelineInfoProps{
    timeline:{
        icon: string;
        title1: string;
        title2: string;
        text1: string;
        text2: string;
        date1: string;
        date2: string;
    }
}

export const Timeline = (props: TimelineInfoProps):JSX.Element => {
    return(
        <div className='container-timeline'>
            <div className='timeline-icon'>
                <img src={props.timeline.icon} alt={props.timeline.icon}/>
            </div>
            <div className='timeline-list'>
                <ul>
                    <li>
                        <h4>{props.timeline.title1}</h4>
                        <p>{props.timeline.text1}</p>
                        <p>{props.timeline.date1}</p>
                    </li>
                        
                    <li>
                        <h4>{props.timeline.title2}</h4>
                        <p>{props.timeline.text2}</p>
                        <p>{props.timeline.date2}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}