import React from 'react';
import   "../app.scss.css";

const Header = () => {
    return (
        <header className="header">
            <div className="myPhoto">
                <div>
                    <img className="myPhotoImg"
                         src="https://lh3.googleusercontent.com/rbQhGHfdOpmTJhTUYCTsiYN6KmT-zL8NDsA_QM0g5aq0cQa4GL_x2zv9oJpwBTrSy3axZ_Qq7IzmCacdmp-icrWiKRbMhCb7798kXWqcZWpPYNkKR574YXLjIKxrDVxLwYlRGlurKJHtJxACC9a13GYlDl4QZPyuuZa-jCU1IuseYHPZXIfyRnSx_sqA2ueqvJ320fzQ3TEbjXYhrEhlpqlEM8xYb23HqG7kibll9cX4bNxKANN45pkB1Yk34YNpeokhuIE7wB-I7kM8mKlUQoY4WTjcdkBwiUM-IBvJ-unezNRBELdLWCA-1f0AE1BfDFS5iTLe5u1q_qay6wjRHM2BpVb9POIs97YrNYzU20kwSsKUgVcpvr1_oB3VQ2quQaZE1Rv9yxMJ2lvvqzK92SAuAQOoP-Rn2BnXx_G5CAHgYRFx7dJaEYWiueWtuyvitNF7bGOVfvzI1wUMegtM99qF9IVXIQfPPGrrLnVKNxkgP6IzqPpCCj--eFO0Upqfkt5eQGHHDD1c0vgVSlVpT85PuW9G-HHcI-11b4UxmdZaOEOLHc0eZdACrAmcEL4wkWlDu58nk1Bn7HJeSySDXxsZeGaD1dC3wJFrmmv-YI_Gkb94O7-D2wZuYjrAzezoVSSq6F7LuZACse41F0Gl51yZ9dViEERYR7Cp7Pti4v40nL7dsdYk5XIoFpHfmcHenfTKdP4CKZM9vZgsMA=w1734-h975-no?authuser=0"
                         alt="me"/>
                </div>
            </div>
            <div className="aboutMe">
                <h2>Hi, i'm developer</h2>
                <p>Hello i'm ReactJs developer! I'm want to work on job at my dream. </p>
            </div>
            <h1>Drynkin Sergey</h1>
        </header>
    )
}

export default Header;