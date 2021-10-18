import React, { useContext} from 'react'
import styles from './InputParticipants.module.scss'
import { InputContext} from '../../../context/context'

export default function InputParticipants({title}) {

    let { participants, setParticipants} = useContext(InputContext);

    return (
        <div className={styles.issueContent}>

            <p>{title}</p>        
            <input
                value={participants.name}
                onChange={({ target }) => setParticipants({ ...participants, name: target.value })}
            /> 
        </div>
    )
}


