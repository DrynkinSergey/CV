import React from 'react';
import img from "../img/me.jpg";

const LeftSideCv = () => (
    <div className={"leftSide"}>
        <div className="myPhoto">
            <img className="myPhotoImg"
                 src={img}
                 alt="me"/>
        </div>
        <h2>Contacts</h2>
        <hr/>

        <div className={"myContacts"}>
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
                    <p>www.linkedin.com/in/DrynkinSergey</p></li>
                <li><span>Telegram:</span>
                    <p>@DrynkinSergey</p></li>
            </ul>
        </div>
        <h2>MySkills</h2>
        <hr/>
        <div className={"mySkills"}>
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
        <div className={"languages"}>
            <ul>
                <li>English - Pre Intermediate</li>
                <li>Russian - Native speaker</li>
                <li>Ukrainian - Native speaker</li>
            </ul>
        </div>
    </div>
);

export default LeftSideCv;