import React from 'react'

export default function EstProject3({ issue3}) {
    
    console.log('issue 3 from estproject',issue3);

    //estTime values into array
    let estTimeArr3 = issue3.map(issue => issue.estTime);
    let estTimeArrToNumber3= estTimeArr3.map(i=>Number(i));

    //sum
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let sum = estTimeArrToNumber3.reduce(reducer);

    //sort 
    estTimeArrToNumber3.sort(function(a, b) {
        return a - b;
    });
    
    let projNumbers3= {
        highest: estTimeArrToNumber3[4],
        lowest: estTimeArrToNumber3[0],
        average: sum/5,
        median: estTimeArrToNumber3[2]
    };
    
    return (
        <div>
            <h3>Projektestimat</h3>

            <h2>Issue 3</h2>
            <p>Högsta est: {projNumbers3.highest}</p>
            <p>Lägsta est: {projNumbers3.lowest}</p>
            <p>Genomsnitt: {projNumbers3.average}</p>
            <p>Median: {projNumbers3.median}</p>
        </div>
    )
}