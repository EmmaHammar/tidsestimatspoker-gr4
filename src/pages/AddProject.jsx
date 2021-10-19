import React from 'react'
import Form from '../containers/Form/Form'
import { InputProvider} from '../context/formContext'

export default function AddProject() {

    return (
        <InputProvider>  
            <Form/>
        </InputProvider>
    )
};
