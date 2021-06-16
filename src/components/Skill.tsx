import React from 'react';
import '../styles/Skill.scss';

interface SkillProps{
    color: string;
    title: string;
    blade?: boolean;
}

export const Skill = (props:SkillProps):JSX.Element => {
    return(
        <div className={`container-skill ${props.blade ? 'active': ''}`} style={{'backgroundColor': props.color}}>
            <h4>{props.title}</h4>
        </div>
    )
}