import react from 'react';
import { useState } from 'react';

function DigitalClock(){
    let newclock= new Date().toLocaleTimeString();
    const [clock,SetClock]=useState(newclock);
    const timealto=()=>{
       let newclock= new Date().toLocaleTimeString();
        SetClock(newclock);
    };
    setInterval(timealto,1000);

    return(        
        <>
        <h1>{clock}</h1>
        </>
    )
}
export default DigitalClock;