import React from 'react';

interface SkillProps{
    color: string;
    title: string;
}

export const Skill = (props:SkillProps):JSX.Element => {
    return(
        <div className='container-skill' style={{'backgroundColor': props.color}}>
            <h4>{props.title}</h4>
        </div>
    )
}