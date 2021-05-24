import React,{useState} from 'react';
import { ProjectView, ProjectViewProps} from './ProjectView';

interface ProjectState{
    activeProject: string;
}

export const Projects = ():JSX.Element => {

    const [activeProject, setActiveProject] = useState<ProjectState['activeProject']>('');

    // const renderList = ():JSX.Element => {
    //     return(

    //     )
    // }

    const handleClick = (title: string):void => {
        if(title === activeProject){
            setActiveProject('');
        }else{
            setActiveProject(title);
        }
    }

    const shouldRenderView = (title:string, details:ProjectViewProps):JSX.Element => {
        return title === activeProject
        ? <ProjectView project={details.project} />
        : <div></div>
    }

    return(
        <div className='container-projects'>

        </div>
    )
}