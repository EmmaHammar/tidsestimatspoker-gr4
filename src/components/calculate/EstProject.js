import React, {useEffect, useState} from 'react'

export default function EstProject() {
    
    let issue1 = [
        {
            name: "axel", estTime: "3", issueId: "1"
        }, {
            name: "emma", estTime: "2", issueId: "1"
        }, {
            name: "sarak", estTime: "2", issueId: "1"
        }, {
            name: "saras", estTime: "1", issueId: "1"
        }, {
            name: "sandra", estTime: "0", issueId: "1"
        }
    ];

    //estTime values into array
    let estTimeArr = issue1.map(issue => issue.estTime);
    let estTimeArrToNumber = estTimeArr.map(i=>Number(i));

    //sum
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let sum = estTimeArrToNumber.reduce(reducer);

    //sort 
    estTimeArrToNumber.sort(function(a, b) {
        return a - b;
    });

    let projNumbers = {
        highest: estTimeArrToNumber[4],
        lowest: estTimeArrToNumber[0],
        average: sum/5,
        median: estTimeArrToNumber[2]
    };
    
    return (
        <div>
            <h3>Projektestimat</h3>

            <h2>Issue 1</h2>
            <p>Högsta est: {projNumbers.highest}</p>
            <p>Lägsta est: {projNumbers.lowest}</p>
            <p>Genomsnitt: {projNumbers.average}</p>
            <p>Median: {projNumbers.median}</p>
        </div>
    )
}
