import React from 'react';
import styles from "../App.module.css";

const LeftSideCv = () => (
    <div className={styles.leftSide}>
        <h2>Contacts</h2>
        <hr/>

        <div className={styles.myContacts}>
            <ul>
                <li><span>Location:</span>
                <p>Chernomorsk, Odessa, Ukraine</p></li>
                <li><span>Phone:</span>
                    <p>+380931225096</p></li>
                <li><span>E-mail:</span>
                    <p>sergsmile29@gmail.com</p></li>
                <li><span>GitHub:</span>
                    <p>https://github.com/DrynkinSergey</p></li>
                <li><span>LinkedIn:</span>
                    <p>https://www.linkedin.com/in/sergey-drynkin-7270b422a/</p></li>
                <li><span>Telegram:</span>
                    <p>@DrynkinSergey</p></li>
            </ul>
        </div>
        <h2>MySkills</h2>
        <hr/>
        <div className={styles.mySkills}>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>JavaScript</li>
                <li><span>CSS</span>
                    <p>Grid</p>
                    <p>FlexBox</p>
                    <p>Adaptive Layout</p>
                </li>
                <li>HTML</li>
                <li>Git</li>
            </ul>
        </div>
        <h2>Languages</h2>
        <hr/>
        <div className={styles.languages}>
            <ul>
                <li>English - Pre Intermediate</li>
                <li>Russian - Native speaker</li>
                <li>Ukrainian - Native speaker</li>
            </ul>
        </div>
    </div>
);

export default LeftSideCv;