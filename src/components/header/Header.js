import React from 'react'
import styles from './Header.module.scss'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className={styles.header}>
        <Link to="/" style={{ textDecoration: 'none' }}> 
            <h1>Tidsestimatspoker</h1>
        </Link>
            <p>- Grupp 4</p>
        </div>
    )
};