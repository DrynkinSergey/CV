import React from 'react';
import './about.scss'

const About = (props) => (
    <section className='about'>
        <h2>What's Up!</h2>
        <p>Hello i'm ReactJs developer! I'm want to work on job at my dream and now i selfstudy for that.
            I use ReactJS, Redux, JavaScript, SCSS in my projects</p>
        <ul>
            <label htmlFor="ul">INFO</label>
            <hr/>
            <li>Phone
                +38093 122 50 96</li>
            <li>Email
                sergsmile29@gmail.com</li>
            <li>Website
                github.com/DrynkinSergey</li>
            <li>Address
                Chernomorsk, Odessa, Ukraine</li>
        </ul>
        <ul>
            <label htmlFor="ul">SKILLS</label>
            <hr/>

            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Git</li>
        </ul>
        <ul>
            <label htmlFor="ul">SOCIALS</label>
            <hr/>

            <li>linkedin.com/in/DrynkinSergey</li>
            <li>instagram.com/drynkinsergey</li>
            <li>t.me/DrynkinSerg</li>
        </ul>
    </section>
);

export default About;