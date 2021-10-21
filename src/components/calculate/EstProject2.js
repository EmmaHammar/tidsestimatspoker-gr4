import React  from 'react'

export default function EstProject2({issue2}) {
    
    console.log('issue 2 from estproject',issue2);

    //estTime values into array
    let estTimeArr2 = issue2.map(issue => issue.estTime);
    let estTimeArrToNumber2= estTimeArr2.map(i=>Number(i));

    //sum
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let sum = estTimeArrToNumber2.reduce(reducer);

    //sort 
    estTimeArrToNumber2.sort(function(a, b) {
        return a - b;
    });

    let projNumbers2= {
        highest: estTimeArrToNumber2[4],
        lowest: estTimeArrToNumber2[0],
        average: sum/5,
        median: estTimeArrToNumber2[2]
    };
    
    return (
        <div>
            <h3>Projektestimat</h3>

            <h2>Issue 2</h2>
            <p>Högsta est: {projNumbers2.highest}</p>
            <p>Lägsta est: {projNumbers2.lowest}</p>
            <p>Genomsnitt: {projNumbers2.average}</p>
            <p>Median: {projNumbers2.median}</p>
        </div>
    )
}