import React from 'react'
import styles from './ButtonParticipants.module.scss'

export default function ButtonParticipants({children}) {
    return (
        <button className={styles.button}>{children}</button>  
    )
}
