import React, {useContext} from 'react'
import styles from './Confirmation.module.scss'
import { v4 as uuid } from 'uuid'
import { InputContext} from '../../../context/formContext'

export default function Confirmation({input, addInput}) {

    let { issues, participants} = useContext(InputContext);

    let value;

    if(input === "participants"){
        value = participants;
    }

    if(input === "issue"){
        value = issues;
    }

    // Color Palette
    const colorPalette = ['#fa744f', '#ffbcbc', '#4cd3c2', '#b7efcd', '#edffea', '#ffe75e', '#feb72b', '#e85f99', '#9399ff', '#dab8f3', '#ea7ad7', '#ce0f3d', '#fd2eb3', '#ffc6c7']

    // Select 1st color
    const color1 = colorPalette[Math.floor(Math.random() * colorPalette.length)];

    // Remove 1st color from list of possibilities
    const remainingColors = colorPalette.filter(function (val) { return val !== color1 })

    // Select 2nd color
    const color2 = remainingColors[Math.floor(Math.random() * remainingColors.length)];

    return (
        <div className={styles.confirmation}>
            <button type="button" className={styles.reject}>
                <i className={`fa fa-times fa-2x`} />
            </button>

            <button
                type="button"
                className={styles.approve}
                onClick={() =>  {addInput(value, color2, uuid())}}
               >
                <i className={`fa fa-check fa-2x`} />
            </button>
        </div>
    )
}
