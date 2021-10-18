import React from 'react';
import { useLocation } from 'react-router-dom'
import styles from '../styles/Project.module.scss'

export default function Project() {

    const location = useLocation()
    const {project} = location.state

    console.log(project)

    return (

        <div className={styles.container}>
        
            <h2 className={styles.header}> {project.projectName}</h2>
            
            <div className={styles.participants}>
                {project.participants.map((item, i) => (
                    <button 
                     className={styles.button} 
                     key={i}
                     onClick={() => console.log(item.id)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            <div className={styles.addIssue}>
                <input placeholder="Lägg till ny"></input> 
                <button> Add Issue</button>
            </div>

            <div className={styles.issueList}>
                <div>
                    <p>#</p>
                    <p>Issue</p>
                    <p>Your est</p>
                </div>
                {project.issueList.map((issue, i) => (
                    
                    <div key={i}>
                        <p> {i}</p>
                        <p> {issue.issueTitle}</p>
                        <input type="checkbox"/>
                    </div>
                ))}
            </div>

        </div>
        
    )
};