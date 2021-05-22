import React from 'react';
import { Skill } from './Skill';

export const About = ():JSX.Element => {
    return(
        <div className='container-about'>
            <div className='container-timeline'>
                timeline
            </div>
            <div className='container-skills'>
            <div className='skills-title'> 
                <h1>Skills</h1>
            </div>
            <div className='skills-icon'>
                <h1 >{`{`}</h1>
            </div>
            <div className='skills-bar'>
                <Skill title={'JavaScript'} color={'#03BFF8'}/>

                <Skill title={'TypeScript'} color={'#FA60EE'}/>

                <Skill title={'React JS'} color={'#0390F8'}/>

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