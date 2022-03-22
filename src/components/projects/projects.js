import React from 'react';
import './projects.scss'
import hobbi1 from '../../img/01.png'
import hobbi2 from '../../img/02.png'
import hobbi3 from '../../img/03.png'
import hobbi4 from '../../img/04.png'
const Projects = (props) => (
    <section className='projects'>
        <h2>My Projects</h2>
        <div>
            <h3>All my works and projects:</h3>
            <a href="https://github.com/DrynkinSergey">https://github.com/DrynkinSergey</a>
        </div>
        <div>
            <h3>Social network react/redux:</h3>
            <a href="https://github.com/DrynkinSergey/Social">
                https://github.com/DrynkinSergey/Social</a>
            <p>Work with React, Redux to build small social network.</p>
            <p> Use: React, Redux, Thunk</p>
        </div>
        <div>
            <h3>Cooffee:</h3>
            <a href="https://github.com/DrynkinSergey/Coffee">
                https://github.com/DrynkinSergey/Coffee</a>
            <p>Work with React and SCSS, deployed on gh-pages , responsive
            </p>
            <p> Use: React, SCSS</p>
            <p>DEMO:
                <a target='_blank'
                   href="https://drynkinsergey.github.io/Coffee/">
                    https://drynkinsergey.github.io/Coffee/</a></p>
        </div>
        <div>
            <h3>User table:</h3>
            <a href="https://github.com/DrynkinSergey/test-task-usersTable">
                https://github.com/DrynkinSergey/test-task-usersTable</a>
            <p>Work with React, Redux, axios and SCSS, deployed on gh-pages , responsive.
            </p>
            <p>Use: React, Redux, axios, localStorage, Route, SCSS</p>
            <p>DEMO:
                DEMO:
                <a target='_blank'
                   href="https://drynkinsergey.github.io/test-task-usersTable/">
                    https://drynkinsergey.github.io/test-task-usersTable/
                </a></p>
        </div>

        <h2>Education</h2>
        <div className='d-flex'>
            <span>2012 - 2016</span>
            <div>
                <p>Alchevsk itDonstU
                    Software development
                </p>
                <p>I studied at the Alchevsk ITDonSTU with a degree in software development from 2012 to 2016, and now I'm learning programming myself</p>
            </div>
        </div>
        <h2>Hobbies</h2>
       <section className='hobbies'>

           <img src={hobbi1} alt=""/>
           <img src={hobbi2} alt=""/>
           <img src={hobbi3} alt=""/>
           <img src={hobbi4} alt=""/>
       </section>
    </section>
);

export default Projects;