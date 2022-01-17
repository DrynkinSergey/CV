import React from "react";
import   './app.scss.css';
import Header from "./components/header";
import LeftSideCv from "./components/leftSideCV";
import RightSideCV from "./components/rightSideCV";


const App = () => {
    return (
        <div className="appWrapper">
            <div className="resumeBlock">
                <Header/>
                <LeftSideCv/>
                <RightSideCV/>
            </div>
        </div>
    )
}

export default App;
