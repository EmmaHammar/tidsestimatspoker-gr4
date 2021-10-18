
import React,{useState} from 'react'
import styles from './Issues.module.scss'

export default function Dropdown({title, children}) {

    const [state, setState] = useState(false)

    return (

        <div className={styles.dropdown}>
            <p className={styles.dropdownHeader}> 
                {title}
                <span onClick={() => setState(!state)}>
                    {state ? <img src="/icons/close-slim.png" alt="Close" /> : <img src="/icons/add.png" alt="Open" />}
                </span>
            </p>

            {state ? children : ""} 
        </div>
    )
}


