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
const myStudyInfo = "I studied at the  Alchevsk ITDonSTU with a degree in software development from 2012 to 2016, and now I'm learning programming myself ";

const RightSideCV = () => (
    <div className={'rightSide'}>
        <Header/>
        <h2>My projects</h2>

        {projectsData.map((item,index) => <Section key={index} title={item.title} link={item.link}  description={item.description}/>)}

        <h2>My education</h2>
        <Section description={myStudyInfo}/>

    </div>
);

export default RightSideCV;