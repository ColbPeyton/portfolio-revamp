import React, { useState, useContext } from 'react';
import { ProjectView, ProjectViewProps } from './ProjectView';
import { data } from '../_data/data';
import '../styles/Projects.scss';
import gitIcon from '../assets/icons/github.png';
import earthIcon from '../assets/icons/earth.svg';
import { WidthState, WidthContext } from '../contexts/WidthContext';

interface ProjectState {
  activeProject: string;
}

export const Projects = (): JSX.Element => {
  const [activeProject, setActiveProject] = useState<
    ProjectState['activeProject']
  >(data[0].name);
  const [activeProjectDetails, setActiveProjectDetails] = useState<
    ProjectViewProps['project']
  >(data[0]);
  const width = useContext<WidthState['width']>(WidthContext);

  const handleClick = (
    title: string,
    project: ProjectViewProps['project']
  ): void => {
    if (title === activeProject) {
      setActiveProject('');
    } else {
      setActiveProject(title);
      setActiveProjectDetails(project);
    }
  };

  const mobileViewList = (): JSX.Element => {
    return (
      <div className="container-list-mobile">
        {data.map((el: ProjectViewProps['project'], index: number) => {
          return (
            <div className="container-project-view">
              <div
                className={`container-project ${el.name
                  .replace(/\./g, '')
                  .replace(/ /g, '_')}`}
              >
                <div className="mobile-header">
                  <a className={'github'} href={el.github}>
                    <img src={gitIcon} />
                  </a>
                  <h3>{el.name}</h3>
                  <a
                    className={el.url.length > 0 ? 'hosted' : 'not-hosted'}
                    href={el.url}
                  >
                    <img src={earthIcon} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const desktopViewList = (): JSX.Element => {
    return (
      <div className="container-list-desktop">
        <div className="container-list">
          {data.map((el: ProjectViewProps['project'], index: number) => {
            return (
              <div className="container-project-view">
                <button
                  className={`container-project ${el.name
                    .replace(/\./g, '')
                    .replace(/ /g, '_')}`}
                  onClick={() => handleClick(el.name, el)}
                >
                  <h3>{el.name}</h3>
                </button>
                {/* <div
                  className={`container-view ${
                    el.name === activeProject ? 'active' : 'inactive'
                  }`}
                ></div> */}
              </div>
            );
          })}
        </div>
        <div className="container-list-selected">
          <h1>{activeProject}</h1>
          {activeProject && (
            <ProjectView project={activeProjectDetails} blade={true} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container-projects">
      <div className="container-title">
        <h1>Projects</h1>
      </div>
      <div className="container-projects-list">
        {width >= 579 ? desktopViewList() : mobileViewList()}
      </div>
    </div>
  );
};
