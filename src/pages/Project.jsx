import React,{useContext, useState} from 'react';
import { useLocation} from 'react-router-dom'
import styles from '../styles/Project.module.scss'
import {ProjectContext }from '../context/projectsContext'

export default function Project() {

    //Hämtar de specifika projektet som klickats på från route
    const location = useLocation()
    const {project} = location.state

    //Hämtar alla projekt från projectContext (globalt state som håller state för projects)
    let { projects, setProjects} = useContext(ProjectContext);

    // console.log(project)

    //State för input estTime
    const [input, setInput] = useState("")

    //State för vald person
    const [person, setPerson] = useState({})

    //Add est time
    const addEstTime = (issue) => {

        //Denna funktion ska lägga till estTime

        // let update = [...project.issueList]

        // const findValue = (element) => element.id === issue.id;
        // // Find index of issue
        // let key = update.findIndex(findValue);

        // console.log(update[key])

        // // update[key] = {...update[key] = issue}

        // console.log(update)

    }





    //Filter personIssue (Only get the selected persons issue)
    const personIssue = (item) => {
        let issues = item.participants.filter(issue => issue.id == person.id)
        issues = issues[0]
        return issues.estTime
    }


    return (

        <div className={styles.container}>
            <h2 className={styles.header}> {project.projectName}</h2>
            <div className={styles.participants}>
                {project.participants.map((item, i) => (
                    <button 
                     className={styles.button} 
                     key={i}
                     onClick={() => setPerson(item)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            <div className={styles.addIssue}>
                <input placeholder="Lägg till ny"></input> 
                <button> Add Issue</button>
            </div>

            <div className={styles.issueContainer}>
                <p>{person.name}</p>
                
                <div className={styles.issueList}>
                    <div>
                        <p>#</p>
                        <p>Issue</p>
                        <p>Your Est</p>
                        <p>Est</p>
                        <p>Lägg till</p>
                    </div>
                    {project.issueList.map((issue, i) => (
                        
                        <div  key={i}>
                            <p> {i}</p>
                            <p> {issue.issueTitle}</p>
                            <p> {person.id ? personIssue(issue) :""} </p>
                            <input type="text"
                                type="text"
                                value={input}
                                onChange={({ target }) => setInput(target.value)} 
                            />
                            <button id={issue.id}
                                onClick={() => addEstTime(issue)}
                            >Lägg till</button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
        
    )
};