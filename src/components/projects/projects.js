import React from 'react';
import './projects.scss'
import hobby1 from '../../img/01.png'
import hobby2 from '../../img/02.png'
import hobby3 from '../../img/03.png'
import hobby4 from '../../img/04.png'
import link from '../../img/link.svg'
import code from '../../img/code.svg'
import edu from '../../img/edu.svg'
import hobby from '../../img/hobby.svg'

const Projects = () => (
    <section className='projects'>
        <h2><img className='code' src={code} alt=""/>My Projects</h2>
        <div className='projects_item'>
            <h3>All my works and projects:</h3>
            <a target='_blank' href="https://github.com/DrynkinSergey"><img className='svg' src={link} alt=""/>https://github.com/DrynkinSergey</a>
        </div>
        <div className='projects_item'>
            <h3>Social network react/redux:</h3>
            <a target='_blank' href="https://github.com/DrynkinSergey/Social">
                <img className='svg' src={link} alt=""/> https://github.com/DrynkinSergey/Social</a>
            <p><span>Work with:</span> React, Redux to build small social network.</p>
            <p> <span>Use</span>: React, Redux, Thunk</p>
        </div>
        <div className='projects_item'>
            <h3>Cooffee:</h3>
            <a target='_blank' href="https://github.com/DrynkinSergey/Coffee">
                <img className='svg' src={link} alt=""/>https://github.com/DrynkinSergey/Coffee</a>
            <p><span>Work with:</span> React and SCSS, deployed on gh-pages , responsive
            </p>
            <p> <span>Use</span>: React, SCSS</p>
            <p><span>DEMO</span>:
                <a target='_blank'
                   href="https://drynkinsergey.github.io/Coffee/">
                      https://drynkinsergey.github.io/Coffee/</a></p>
        </div>
        <div className='projects_item last'>
            <h3>User table:</h3>
            <a target='_blank' href="https://github.com/DrynkinSergey/test-task-usersTable">
                <img className='svg' src={link} alt=""/>   https://github.com/DrynkinSergey/test-task-usersTable</a>
            <p><span>Work with:</span> React, Redux, axios and SCSS, deployed on gh-pages , responsive.
            </p>
            <p><span>Use</span>: React, Redux, axios, localStorage, Route, SCSS</p>
            <p> <span>DEMO</span>:
                <a target='_blank'
                   href="https://drynkinsergey.github.io/test-task-usersTable/">
                    https://drynkinsergey.github.io/test-task-usersTable/
                </a></p>
        </div>

        <h2><img className='code' src={edu} alt=""/>Education</h2>
        <div className='d-flex education'>
            <span>2012 - 2016</span>
            <div className='edu-info'>
                <p className='edu'>Alchevsk itDonstU
                    Software development
                </p>
                <p>I studied at the Alchevsk ITDonSTU with a degree in software development from 2012 to 2016, and now
                    I'm learning programming myself</p>
            </div>
        </div>
        <h2><img className='code' src={hobby} alt=""/>Hobbies</h2>
        <section className='hobbies'>

            <img src={hobby1} alt=""/>
            <img src={hobby2} alt=""/>
            <img src={hobby3} alt=""/>
            <img src={hobby4} alt=""/>
        </section>
    </section>
);

export default Projects;