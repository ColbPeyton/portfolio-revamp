const js = {title: 'JavaScript', color: '#03BFF8'};
const ts = {title: 'TypeScript', color: '#FA60EE'};
const react = {title: 'React', color: '#0390F8'};
const node = {title: 'Node.js', color: '#6C60FA'};
const html = {title: 'HTML/CSS', color: '#BF60FA'};
const sass = {title: 'SASS', color: '#6C60FA'};
const redux = {title: 'Redux', color: '#DC60FA'};
const mysql = {title: 'Redux', color: '#0390F8'};
const rRouter = {title: 'React Router', color: '#BF60FA'};
const context = {title: 'Context', color: '#6C60FA'};





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
            ts, 
            react,
            context, 
            html, 
            sass,
        ],
        about: 'Fan project to design dango combinations from Monster Hunter Rise. Developed as practice to utilize typescript and react context.',
        url: 'https://colbpeyton.github.io/design-dango/',
        github: 'https://github.com/ColbPeyton/design-dango'
    },
    {
        name: 'Pixel Bee E-Commerce',
        technology: [
            js,
            react, 
            html, 
            sass,
            rRouter, 
            redux
        ],
        about: 'Practice ecommerce site for a local designer.',
        url: 'https://unruffled-ptolemy-7b3a78.netlify.app/#/',
        github: 'https://github.com/ColbPeyton/practice_ecommerce'
    },
    
    {
        name: 'The Factory',
        technology: [
            js,
            react, 
            sass, 
            html
        ],
        about: 'Practice website for a fictional gym',
        url: 'https://nifty-turing-8d4e6e.netlify.app/',
        github: 'https://github.com/ColbPeyton/practice_business'
    },
    {
        name: 'Dr. Hoops',
        technology: [
            js,
            react,
            node, 
            rRouter, 
            sass, 
            html, 
            mysql
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