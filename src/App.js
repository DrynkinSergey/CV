import React from "react";
import LeftSideCv from "./components/leftSideCV";
import RightSideCV from "./components/rightSideCV";
import  './css/animationBg.scss'
import  './style.scss';

const App = () => {
    return (
        <div className="appWrapper">
            <div className="resumeBlock">
                <LeftSideCv/>
                <RightSideCV/>
            </div>
        </div>
    )
}

export default App;
