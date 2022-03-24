import React from 'react';
import './about.scss'
import css from '../../img/icons/css.svg'
import git from '../../img/icons/git.svg'
import html from '../../img/icons/html.svg'
import js from '../../img/icons/js.svg'
import redux from '../../img/icons/redux.svg'
import react from '../../img/icons/react.svg'
import github from '../../img/icons/github.svg'
import inst from '../../img/icons/inst.svg'
import lin from '../../img/icons/lin.svg'
import telegram from '../../img/icons/telegram.svg'

const About = (props) => (
    <section className='about slideDown'>
        <h2 className='intro'>What's Up!</h2>
        <p className='intro'>Hello i'm ReactJs developer! I'm want to work on job at my dream and now i selfstudy for that.
            I use ReactJS, Redux, JavaScript, SCSS in my projects</p>
        <ul>
            <h3>INFO</h3>
            <hr/>
            <li><p>Phone:</p>
                <a href="tel:+380931225096">+380931225096</a></li>
            <li><p>Email:</p>
                <a href="mailto:">sergsmile29@gmail.com</a></li>
            <li><p>Website:</p>
                <a target='_blank' href="http://github.com/DrynkinSergey">
                    <img className='about_icon' src={github} alt=""/></a></li>
            <li><p>Address:</p>
                Chernomorsk, Odessa, Ukraine</li>
        </ul>
        <ul>
            <h3>SKILLS</h3>
            <hr/>
            <li className='skill_item'><img className='about_icon' src={js} alt=""/>JavaScript</li>
            <li className='skill_item'><img className='about_icon' src={react} alt=""/>React</li>
            <li className='skill_item'><img className='about_icon' src={redux} alt=""/>Redux</li>
            <li className='skill_item'><img className='about_icon' src={html} alt=""/>HTML5</li>
            <li className='skill_item'><img className='about_icon' src={css} alt=""/>CSS</li>
            <li className='skill_item'><img className='about_icon' src={git} alt=""/>Git</li>
        </ul>
        <ul >
            <h3>SOCIALS</h3>
            <hr/>

            <li className='social'> <a target='_blank' href="http://linkedin.com/in/DrynkinSergey"><img  className='about_icon' src={lin} alt=""/><span>linkedin.com/in/DrynkinSergey</span></a></li>
            <li className='social'> <a target='_blank' href="http://instagram.com/drynkinsergey"><img className='about_icon' src={inst} alt=""/><span>instagram.com/drynkinsergey</span></a></li>
            <li className='social'> <a target='_blank' href="http://t.me/DrynkinSerg"><img className='about_icon' src={telegram} alt=""/><span>t.me/DrynkinSerg</span></a></li>
        </ul>
    </section>
);

export default About;