import React from 'react'
import styles from '../styles/Home.module.scss'
import { useState} from 'react';
import AddProject from './AddProject';
import Project from './Project';
import { v4 as uuid } from 'uuid'


export default function ProjectList({projects}) {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null)
        } else {
            setSelected(i)
        }
    }

    return (
        <div className={styles.listContainer}>

        <div className={styles.listHeader}>
            <h2>Projects</h2>
            <AddProject projects={projects} />
        </div>

        {projects.map((item, i) => (

            <div className={styles.listItem} key={uuid()}>
                <div className={styles.title}>
                    <h3>{item.projectName}
                        <span onClick={() => toggle(i)}>
                            {selected === i ? "-" : "+"}</span>
                    </h3>
                </div>

                {selected === i ?
                    <div className={styles.content} >
                        {item.projectDesc}
                        <div className={styles.listItemFooter}>

                            {item.estComplete ? <i className={`${styles.iconTrue} fas fa-check-circle`}/> : <i className={`${styles.iconFalse} fas fa-exclamation-circle`}/>}

                            <button onClick={() => <Project projects={projects} />}> Visit Project </button>
                        </div>
                    </div> : ""
                }
            </div>
        ))}

    </div>

    )
}
