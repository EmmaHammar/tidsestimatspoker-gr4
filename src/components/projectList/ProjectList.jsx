import React, {useState}  from 'react'
import styles from './ProjectList.module.scss'
import { v4 as uuid } from 'uuid'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

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
                <Link to={{pathname: '/AddProject',state: {projects: projects}}}>
                    <button>  Add Project </button>  
                </Link>
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

                                <Link to={{pathname: '/Project',state: {project: item}}}>
                                    <button> Visit Project </button>
                                </Link>
                            </div>
                        </div> : ""
                    }
                </div>
            ))}

        </div>

    )
}


