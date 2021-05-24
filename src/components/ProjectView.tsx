import React from "react";
import {Skill} from './Skill';

export interface ProjectViewProps{
    project:{
        name: string;
        technology: {color:string, title:string}[];
        about: string;
        url: string;
        github: string;
    }
}

export const ProjectView = (props: ProjectViewProps):JSX.Element => {

    const renderTechnology = ():JSX.Element[] => {
        return props.project.technology.map((
            tech:{ color: string; title: string}, index:number
            ):JSX.Element => {
                return <Skill title={tech.title} color={tech.color} key={index}/>
        })
    }

    return(
        <div className='container-project-view'>
            <div className='container-view-title'>
                <h2>{props.project.name}</h2>
            </div>
            <div className='container-view-about'>
                <p>{props.project.about}</p>
            </div>
            <div className='container-view-technology'>
                {renderTechnology()}
            </div>
        </div>
    )
}