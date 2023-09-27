import React, { useState } from "react";

function FormDataInConsole(){
    const [first,setFirst]=useState("");
    const [second,setSecond]=useState("");

    const firstEvent=(event)=>{
        const input1=event.target.value;
        setFirst(input1);
    }
    const secondEvent=(event)=>{
        const input2=event.target.value;
        setSecond(input2);
    }
    const inputdata=(event)=>{
        event.preventDefault();
        console.log(first,"first Name");
        console.log(second,"second Name");
    }

    return(
        <>
        <div>
            <form onSubmit={inputdata}>
                <input type="text" placeholder="First Name" onChange={firstEvent} value={first}/>
                <input type="text" placeholder="Second Name" onChange={secondEvent} value={second}/>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}
export default FormDataInConsole;