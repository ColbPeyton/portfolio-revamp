import React from 'react';
import { Skill } from './Skill';
import { Timeline } from './Timeline';
import school from '../assets/icons/school.svg';
import work from '../assets/icons/work.svg';

import '../styles/About.scss';

export const About = ():JSX.Element => {
    return(
        <div className='container-about'>
            <div className='container-title'>
                <h1>ABOUT</h1>
            </div>
            <div className='container-timelines'>
                <div className='timeline-education'>
                    <Timeline 
                        timeline={{
                            icon: school,
                            title1: 'B.S. I.T. Development',
                            title2: 'B.A. Political Science',
                            text1: 'The University of Southern Mississippi',
                            text2: 'The University of Southern Mississippi',
                            date1:'2017-2020',
                            date2: '2011-2016'
                        }}
                    />
                </div>
                <div className='timeline-education'>
                    <Timeline 
                            timeline={{
                                icon: work,
                                title1: 'Application Manager',
                                title2: 'Best Buy',
                                text1: 'The University of Southern Mississippi',
                                text2: 'Hattiesburg, Mississippi',
                                date1:'2017-2020',
                                date2: '2011-2016'
                            }}
                        />
                </div>
            </div>
            <div className='container-skills'>
                <div className='skills-title'> 
                    <h1>SKILLS</h1>
                    <h1 className='skills-icon'>{`{`}</h1>
                </div>
                <div className='skills-bar'>
                    <Skill title={'JavaScript'} color={'#03BFF8'}/>

                    <Skill title={'TypeScript'} color={'#FA60EE'}/>

                    <Skill title={'React'} color={'#0390F8'}/>

                    <Skill title={'Python'} color={'#DC60FA'}/>

                    <Skill title={'Node.js'} color={'#6C60FA'}/>

                    <Skill title={'C#'} color={'#BF60FA'}/>

                    <Skill title={'HTML/CSS'} color={'#BF60FA'}/>

                    <Skill title={'SASS'} color={'#6C60FA'}/>

                    <Skill title={'Redux'} color={'#DC60FA'}/>

                    <Skill title={'Express'} color={'#0390F8'}/>

                    <Skill title={'Git'} color={'#FA60EE'}/>

                    <Skill title={'MySQL'} color={'#03BFF8'}/>
                </div>
            </div>
        </div>
    )
}