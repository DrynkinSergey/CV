import React from 'react';
const Section = (props) => {
    return (
        <div >
            <p >{props.title}</p>
            <p >{props.description}</p>
            <a href={props.link} >{props.link}</a>
        </div>

    );
}

export default Section;