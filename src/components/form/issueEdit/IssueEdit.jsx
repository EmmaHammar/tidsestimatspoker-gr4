import React, { useState, useEffect, useContext } from 'react'
import styles from './IssueEdit.module.scss'
import { InputContext} from '../../../context/context'

export default function IssueEdit({updateInput}) {

    let {selectedSockerbit} = useContext(InputContext);

    const [editIssue, setEditIssue] = useState(selectedSockerbit);

    useEffect(() => {

        setEditIssue(selectedSockerbit)

    }, [selectedSockerbit])

    return (
        <div className={styles.issueEdit}>
            <div className={styles.content}> 
                <h4>
                    <img src="/icons/close-slim.png" alt="Close" />
                    Edit Issue
                </h4>
                <p>Title</p>
                <input
                    value={editIssue.issueTitle}
                    onChange={({ target }) => setEditIssue({ ...editIssue, issueTitle: target.value })}
                />
                <p>Description</p>
                <input
                    value={editIssue.desc}
                    onChange={({ target }) => setEditIssue({ ...editIssue, desc: target.value })}
                />
                <div className={styles.footer}>
                    <button type="button" className={styles.approve} onClick={() => updateInput(editIssue)}>
                            Save
                        <i className={`fa fa-check fa-2x`} />
                    </button>
                </div>
            </div>
        </div>
    )
}
