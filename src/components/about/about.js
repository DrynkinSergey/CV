import React from 'react';
import './about.scss'

const About = (props) => (
    <section className='about'>
        <h2>What's Up!</h2>
        <p className='intro'>Hello i'm ReactJs developer! I'm want to work on job at my dream and now i selfstudy for that.
            I use ReactJS, Redux, JavaScript, SCSS in my projects</p>
        <ul>
            <h3>INFO</h3>
            <hr/>
            <li><p>Phone:</p>
                <a href="tel:+380931225096">+38093 122 50 96</a></li>
            <li><p>Email:</p>
                <a href="mailto:">sergsmile29@gmail.com</a></li>
            <li><p>Website:</p>
                <a target='_blank' href="http://github.com/DrynkinSergey">github.com/DrynkinSergey</a></li>
            <li><p>Address:</p>
                Chernomorsk, Odessa, Ukraine</li>
        </ul>
        <ul>
            <h3>SKILLS</h3>
            <hr/>
            <li className='skill_item'>JavaScript</li>
            <li className='skill_item'>React</li>
            <li className='skill_item'>Redux</li>
            <li className='skill_item'>HTML5</li>
            <li className='skill_item'>CSS</li>
            <li className='skill_item'>Git</li>
        </ul>
        <ul>
            <h3>SOCIALS</h3>
            <hr/>

            <li> <a target='_blank' href="http://linkedin.com/in/DrynkinSergey">linkedin.com/in/DrynkinSergey</a></li>
            <li> <a target='_blank' href="http://instagram.com/drynkinsergey">instagram.com/drynkinsergey</a></li>
            <li> <a target='_blank' href="http://t.me/DrynkinSerg">t.me/DrynkinSerg</a></li>
        </ul>
    </section>
);

export default About;