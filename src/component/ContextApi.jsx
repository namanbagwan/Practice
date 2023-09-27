import { FirstName } from "../App";

function ContextApi(){
    return(
        <>
        <FirstName.Consumer>
            {
                (fname)=>{
                    return(
                        <>
                        <h1>My Name Is {fname}</h1>
                        </>
                    )
                }
            }
        </FirstName.Consumer>
        
        </>
    )
}
export default ContextApi;