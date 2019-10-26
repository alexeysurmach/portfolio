import React from 'react';
import styles from './Skill.module.css'

function Skill() {
    return (
        <div className={styles.skill}>
            <div className={styles.image}></div>
            <span className={styles.skillTitle}> React </span>
            <span className={styles.skillDescription}> Описание навыка </span>
        </div>
    );
}

export default Skill;
