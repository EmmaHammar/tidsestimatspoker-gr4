import React, { useContext} from 'react'
import styles from './InputIssue.module.scss'
import { InputContext} from '../../../context/context'

export default function InputIssue({title, property}) {

    let { issues, setIssues} = useContext(InputContext);

    return (
        <div className={styles.issueContent}>

            <p>{title}</p>        
            <input
                    value={issues[property]}
                    onChange={({ target }) => setIssues({ ...issues, [property]: target.value })}
                /> 
        </div>
    )
}


