import React from 'react';
import styles from "../App.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.myPhoto}>
                <div>
                    <img className={styles.myPhotoImg}
                         src="https://lh3.googleusercontent.com/rbQhGHfdOpmTJhTUYCTsiYN6KmT-zL8NDsA_QM0g5aq0cQa4GL_x2zv9oJpwBTrSy3axZ_Qq7IzmCacdmp-icrWiKRbMhCb7798kXWqcZWpPYNkKR574YXLjIKxrDVxLwYlRGlurKJHtJxACC9a13GYlDl4QZPyuuZa-jCU1IuseYHPZXIfyRnSx_sqA2ueqvJ320fzQ3TEbjXYhrEhlpqlEM8xYb23HqG7kibll9cX4bNxKANN45pkB1Yk34YNpeokhuIE7wB-I7kM8mKlUQoY4WTjcdkBwiUM-IBvJ-unezNRBELdLWCA-1f0AE1BfDFS5iTLe5u1q_qay6wjRHM2BpVb9POIs97YrNYzU20kwSsKUgVcpvr1_oB3VQ2quQaZE1Rv9yxMJ2lvvqzK92SAuAQOoP-Rn2BnXx_G5CAHgYRFx7dJaEYWiueWtuyvitNF7bGOVfvzI1wUMegtM99qF9IVXIQfPPGrrLnVKNxkgP6IzqPpCCj--eFO0Upqfkt5eQGHHDD1c0vgVSlVpT85PuW9G-HHcI-11b4UxmdZaOEOLHc0eZdACrAmcEL4wkWlDu58nk1Bn7HJeSySDXxsZeGaD1dC3wJFrmmv-YI_Gkb94O7-D2wZuYjrAzezoVSSq6F7LuZACse41F0Gl51yZ9dViEERYR7Cp7Pti4v40nL7dsdYk5XIoFpHfmcHenfTKdP4CKZM9vZgsMA=w1734-h975-no?authuser=0"
                         alt="me"/>
                </div>
            </div>
            <div className={styles.aboutMe}>
                <h2>Hi, i'm developer</h2>
                <p>Hello i'm ReactJs developer! I'm want to work on job at my dream. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.pedita ipsa maiores, porro praesentium vero! Blanditiis eos et modi nostrum vel? Explicabo mollitia nulla sint. Accusamus, amet autem dicta ducimus earum eveniet impedit incidunt libero molestiae, necessitatibus quaerat quam reiciendis, reprehenderit sapiente temporibus voluptas voluptates voluptatum? Accusamus aperiam asperiores, atque earum fugiat magnam reprehenderit. Distinctio eum exercitationem illo magni placeat, qui rem. Alias beatae cum dicta ea fugiat iusto maiores maxime, nesciunt pariatur provident quis ratione rerum sequi suscipit temporibus vel voluptas voluptatum. Consectetur culpa doloribus ex facilis laboriosam magnam molestias nam neque nisi nobis nulla numquam optio pariatur placeat porro, quae quis! Accusantium, consequuntur debitis facilis illum, impedit inventore molestias odit pariatur provident quis tempore voluptate!</p>
            </div>
            <h1>Drynkin Sergey</h1>
        </header>
    )
}

export default Header;