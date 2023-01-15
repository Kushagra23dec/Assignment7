import React from "react";
import {useRouteError, Link} from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <>  
            <h1>OOPS!!.🦥🦥</h1>
        <h1>{err.status}  {err.statusText}</h1>
        <Link to="/" ><h2>Home</h2></Link>
        </>
    )
}

export default Error;