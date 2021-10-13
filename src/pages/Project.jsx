import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Project({projects}) {


    console.log("prjects", projects)

    return (

        <>
        <Header/>
            <div>
                <h2>Project</h2>
                {/* <Calculate /> */}
            </div>
        <Footer/>
        </>
    )
};