import React, {useEffect, useState} from 'react'

export default function EstProject({issue1}) {
    console.log('issue 1 from estproject',issue1);
  

    //estTime values into array
    let estTimeArr1 = issue1.map(issue => issue.estTime);
    let estTimeArrToNumber1= estTimeArr1.map(i=>Number(i));

    //sum
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let sum = estTimeArrToNumber1.reduce(reducer);

    //sort 
    estTimeArrToNumber1.sort(function(a, b) {
        return a - b;
    });

    let projNumbers1= {
        highest: estTimeArrToNumber1[4],
        lowest: estTimeArrToNumber1[0],
        average: sum/5,
        median: estTimeArrToNumber1[2]
    };
    
    return (
        <div>
            <h3>Projektestimat</h3>

            <h2>Issue 1</h2>
            <p>Högsta est: {projNumbers1.highest}</p>
            <p>Lägsta est: {projNumbers1.lowest}</p>
            <p>Genomsnitt: {projNumbers1.average}</p>
            <p>Median: {projNumbers1.median}</p>
        </div>
    )
}