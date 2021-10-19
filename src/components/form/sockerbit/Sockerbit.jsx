import React, { useContext } from 'react'
import styles from './Sockerbit.module.scss'
import { InputContext } from '../../../context/formContext'

export default function Sockerbit({ list }) {

    let { toggle, setToggle, setSelectedSockerbit } = useContext(InputContext);

    const selectedItem = (id) => {

        let clickedIssue = list.filter(issue => issue.id = id)
        clickedIssue = clickedIssue[0]

        setSelectedSockerbit(clickedIssue)
        setToggle(true)
    }

    return (

        <div className={styles.sockerbit} >
            {list === 0 ?
                " " : list.map((item) => (
                    
                    //Participants button should not be clickable
                    item.issueTitle ?
                        <button type="button" key={item.id}
                            style={{ backgroundColor: item.color }}
                            onClick={() => selectedItem(item.id)}
                            onDoubleClick={() => setToggle(!toggle)}>
                            {item.issueTitle}
                        </button>
                        :
                        <button type="button" key={item.id}
                            style={{ backgroundColor: item.color }}>
                            {item.name}
                        </button>
                ))
            }
        </div>

    )
}
