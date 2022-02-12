import React from 'react';
import Header from "./header";
import Section from "./section/section";

const projectsData = [{
    title:'Social Network',
    description: 'I created social network, with ReactJs + Redux',
    link: 'https://github.com/DrynkinSergey/Social'
},
    {
        title:'ToDo List',
        description: 'I created todo by learning  ReactJs ',
        link: ''
    }]
const courses = [{
    title:'JavaScript + React',
    description: 'I learn React and JavaScript, take more practice',
    link: 'https://www.udemy.com/course/javascript_full/'
},
    {
        title:'React + Redux - Professional development',
        description: 'Learn React + Redux',
        link: 'https://www.udemy.com/course/pro-react-redux/'
    }
]
const myStudyInfo = "I studied at the  Alchevsk ITDonSTU with a degree in software development from 2012 to 2016, and now I'm learning programming myself ";

const RightSideCV = () => (
    <div className={'rightSide'}>
        <Header/>
        <div className='rightSide-content'>
            <h2 className='slide'>My projects</h2>

            {projectsData.map((item,index) => <Section key={index} title={item.title} link={item.link}  description={item.description}/>)}

            <h2 className='slide'>My education</h2>
            <p className='study appearInLine'>{myStudyInfo}</p>
            <h2 className='slide'>My learning courses</h2>
            {courses.map((item,index) => <Section key={index} title={item.title} link={item.link}  description={item.description}/>)}

        </div>

    </div>
);

export default RightSideCV;