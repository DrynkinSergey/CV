import React from 'react';

import img from '../img/me.jpg';
const Header = () => {
    return (
        <header className="header">
            <div className="aboutMe">
                <h1 className='typing animate '> Drynkin Sergey</h1>
                <h2 className='typing animate delay2'>Junior Frontend Developer</h2>
                <p className='appear shake'>Hello i'm ReactJs developer! I'm want to work on job at my dream. I use ReactJS, Redux, JavaScript, CSS in my projects </p>
            </div>
        </header>
    )
}

export default Header;