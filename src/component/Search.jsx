import React, { useState } from "react";
import Sresult from "./Sresult";
function Search(){
    const [text,setText]=useState();
    const inputevent=(even)=>{
        const data=even.target.value;
        setText(data);
        
    }
    return(
        <>
        <div>
            <input type="text" placeholder="Search" onChange={inputevent} value={text}/>
            
        </div>
        {text === "" ?null : <Sresult name={text}/>}
        </>
    )
}
export default Search;