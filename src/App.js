import React from "react";
import Header from "./components/header";
import LeftSideCv from "./components/leftSideCV";
import RightSideCV from "./components/rightSideCV";
import style from './style.scss';

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
