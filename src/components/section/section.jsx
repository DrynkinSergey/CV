import React from 'react';
import styles from './section.module.scss';
const Section = (props) => {
    return (
        <div className={styles.section}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.sectionDescription}>{props.description}</p>
            <a href={props.link} className={styles.sectionLink}>{props.link}</a>

        </div>

    );
}

export default Section;