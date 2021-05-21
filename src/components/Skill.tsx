import React from 'react';

interface SkillProps{
    color: string;
    name: string;
}

export const SkillBar = (props:SkillProps):JSX.Element => {
    return(
        <div className='container-skill' style={{'backgroundColor': props.color}}>
            <h4>{props.name}</h4>
        </div>
    )
}