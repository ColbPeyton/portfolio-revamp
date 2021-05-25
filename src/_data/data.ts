// return color based on position in tech array
const generateColor = (pos:number):string => {
    switch(pos){
        case 0:
            return '#03BFF8';
        case 1:
            return '#0390F8';
        case 2:
            return '#6C60FA';
        case 3:
            return '#BF60FA';
        case 4:
            return '#DC60FA';
        case 5:
            return '#FA60EE';
        default:
            return '#03BFF8'
    }
}




const js = 'JavaScript';
const react = 'React';
const ts = 'TypeScript';
const node = 'Node.js';
const html = 'HTML/CSS';
const sass = 'SASS';
const redux = 'Redux';
const mysql = 'Redux';
const rRouter = 'React Router';
const context = 'Context';





export const data: {
    name: string;
    technology: {color:string, title:string}[];
    about: string;
    url: string;
    github: string;
}[] = [
    {
        name: 'GoGoDango',
        technology: [
            {title: ts, color: generateColor(0)}, 
            {title: react, color: generateColor(1)}, 
            {title: context, color: generateColor(2)}, 
            {title: html, color: generateColor(3)}, 
            {title: sass, color: generateColor(4)}, 
        ],
        about: 'Fan project to design dango combinations from Monster Hunter Rise. Developed as practice to utilize typescript and react context.',
        url: 'https://colbpeyton.github.io/design-dango/',
        github: 'https://github.com/ColbPeyton/design-dango'
    },
    {
        name: 'Pixel Bee E-Commerce',
        technology: [
            {title: js, color: generateColor(0)}, 
            {title: react, color: generateColor(1)}, 
            {title: rRouter, color: generateColor(2)}, 
            {title: redux, color: generateColor(3)}, 
            {title: html, color: generateColor(4)}, 
            {title: sass, color: generateColor(5)}, 
        ],
        about: 'Practice ecommerce site for a local designer.',
        url: 'https://unruffled-ptolemy-7b3a78.netlify.app/#/',
        github: 'https://github.com/ColbPeyton/practice_ecommerce'
    },
    
    {
        name: 'The Factory',
        technology: [
            {title: js, color: generateColor(0)}, 
            {title: react, color: generateColor(1)}, 
            {title: rRouter, color: generateColor(2)}, 
            {title: html, color: generateColor(3)}, 
            {title: sass, color: generateColor(4)}, 
        ],
        about: 'Practice website for a fictional gym',
        url: 'https://nifty-turing-8d4e6e.netlify.app/',
        github: 'https://github.com/ColbPeyton/practice_business'
    },
    {
        name: 'Dr. Hoops',
        technology: [
            {title: js, color: generateColor(0)}, 
            {title: react, color: generateColor(1)}, 
            {title: rRouter, color: generateColor(2)}, 
            {title: node, color: generateColor(3)}, 
            {title: mysql, color: generateColor(4)}, 
            {title: html, color: generateColor(5)}, 
            {title: sass, color: generateColor(4)}, 
        ],
        about: 'Sports Spread site for college basketball. No longer hosted.',
        url: '',
        github: 'https://github.com/ColbPeyton/sports_spread'
    },
]


// {
//     name: '',
//     technology: [
 
//     ],
//     about: '',
//     url: '',
//     github: ''
// },