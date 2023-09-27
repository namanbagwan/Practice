import React from "react";
function Sresult(props){
    console.log(props.name)
    const img=`https://source.unsplash.com//400x200/?${props.name}`;
    return(
        <>
        <div>
            <img src={img} alt={img}/>
        </div>
        </>
    )
}
export default Sresult;