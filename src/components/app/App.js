import React from "react";
import './app.scss'
import About from "../about/about";
import Projects from "../projects/projects";
import photo from "../../img/i.png";
const App = () => {

    return (
        <main className="appWrapper">
            <header className='d-flex'>
                <div className='photo'>
                    <img className='img' src={photo} alt=""/>
                </div>
                <div className='me'>
                    <h1><span>Drynkin</span> Sergey</h1>
                    <h2><span>I am a</span> frontend developer</h2>
                </div>
            </header>
            <div className="content d-flex">
                <About/>
                <Projects/>
            </div>

        </main>
    )
}

export default App;
