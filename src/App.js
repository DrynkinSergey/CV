import React from "react";
import styles from  './App.module.css';
import Header from "./components/header";
import LeftSideCv from "./components/leftSideCV";
import RightSideCV from "./components/rightSideCV";


const App = () => {
    return (
        <div className={styles.appWrapper}>
            <div className={styles.resumeBlock}>
                <Header/>
                <LeftSideCv/>
                <RightSideCV/>
            </div>
        </div>
    )
}

export default App;
