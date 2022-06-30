import { response } from 'express';
import React, { useEffect, useState } from 'react'

export default function Timer2() {

    /* function incrementTimer () {
        setTime(
            time+1
        )
    } */

    const [time, setTime] = useState(0)
    const [countryName, setCountryName] = useState(0)

    useEffect(() => {
    async function fetchData() {
        
            let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        
    }
    const data = response.json()
        
    }, [countryName]);

    useEffect( () => {
        
    })

    return (
        <>
            <div>
                {time}
            </div>
            <input type="text" onChange ={(event) => {setCountryName(event.target.value)}}></input>
            <button onClick={() =>{setTime(time+1)}}>Click me</button>
        </> 
    )
}
