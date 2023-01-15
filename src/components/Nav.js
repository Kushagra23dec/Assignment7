import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../../style.css";

const Nav = () =>{
    const  [login,setLogin] = useState(false);
    return(
        <div className="nav-div">
            <Link className="rm-link-color" to="/"><h1> Food Heaven</h1></Link>
            <ul>
                <li><Link className="rm-link-color" to="/about">About-Us</Link></li>
                <li><Link className="rm-link-color" to="/contact">Contact-Us</Link></li>
                <li> <Link className="rm-link-color" to="/cart">Cart</Link>   </li>
                <li> <button className="log-in-out" onClick={e=>(login===false?setLogin(true):setLogin(false))} >{login===false?"Login":"Logout"}</button></li>
            </ul>
        </div>
    );
}

export default Nav;