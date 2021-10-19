import React from 'react'
import Form from '../containers/Form/Form'
import { InputProvider} from '../context/context'
import { useLocation } from 'react-router-dom'

export default function AddProject() {

    const location = useLocation()
    const { projects } = location.state

    console.log(projects)

    return (
        <InputProvider>  
            <Form/>
        </InputProvider>
    )
};
