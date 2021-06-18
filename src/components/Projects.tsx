import React,{useState, useContext} from 'react';
import { ProjectView, ProjectViewProps} from './ProjectView';
import {data} from '../_data/data';
import '../styles/Projects.scss';
import gitIcon from '../assets/icons/github.png';
import earthIcon from '../assets/icons/earth.svg';
import {WidthState, WidthContext} from '../contexts/WidthContext';

interface ProjectState{
    activeProject: string;
}



export const Projects = ():JSX.Element => {

    const [activeProject, setActiveProject] = useState<ProjectState['activeProject']>('');
    const width = useContext<WidthState['width']>(WidthContext);

    // const mobileViewList = ():JSX.Element => {
        
    // }

    // const desktopViewList = ():JSX.Element => {
        
    // }

    const renderList = ():JSX.Element[] => {
        return data.map((el: ProjectViewProps['project'], index: number) => {
            return(
                <div className='container-project-view'>
                    <div className='mobile-header'>
                        <a className={'github'} href={el.github}><img src={gitIcon} /></a>
                        <h3>{el.name}</h3>
                        <a className={el.url.length > 0 ? 'hosted' : 'not-hosted'} href={el.url}><img src={earthIcon} /></a>
                    </div>
                    <button className={`container-project ${el.name.replace(/\./g, '').replace(/ /g, '_')}`} onClick={()=> handleClick(el.name)}>
                        <h3>{el.name}</h3>
                    </button>
                    <div className={`container-view ${el.name === activeProject ? 'active' : 'inactive'}`}>
                        {el.name === activeProject && <ProjectView project={el} blade={true}/>}
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


    return(
        <div className='container-projects'>
            <div className='container-title'>
                <h1>Projects</h1>
            </div>
            <div className='container-projects-list'>
                <div className='container-list'>
                    {renderList()}
                </div>
            </div>
        </div>
    )
}