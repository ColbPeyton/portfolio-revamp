import React,{useState} from 'react';
import { ProjectView, ProjectViewProps} from './ProjectView';
import {data} from '../_data/data';
import '../styles/Projects.scss';

interface ProjectState{
    activeProject: string;
}

export const Projects = ():JSX.Element => {

    const [activeProject, setActiveProject] = useState<ProjectState['activeProject']>('');

    const renderList = ():JSX.Element[] => {
        return data.map((el: ProjectViewProps['project'], index: number) => {
            return(
                <div className='container-project-view'>
                    <button className='container-project' onClick={()=> handleClick(el.name)}>
                        <h3>{el.name}</h3>
                    </button>
                    <div className='container-view'>
                        {shouldRenderView(el.name, el)}
                    </div>
                </div>
            )
        })
    }

    const handleClick = (title: string):void => {
        if(title === activeProject){
            setActiveProject('');
        }else{
            setActiveProject(title);
        }
    }

    const shouldRenderView = (title:string, details:ProjectViewProps['project']):JSX.Element => {
        return title === activeProject
        ? <ProjectView project={details} />
        : <div></div>
    }

    return(
        <div className='container-projects'>
            <div className='container-title'>
                <h1>Projects</h1>
            </div>
            {renderList()}
        </div>
    )
}