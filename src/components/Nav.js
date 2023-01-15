import React from "react";
import { Link } from "react-router-dom";
import "../../style.css";

const Nav = () =>{
    return(
        <div className="nav-div">
            <Link className="rm-link-color" to="/"><h1> Food Heaven</h1></Link>
            <ul>
                <li><Link className="rm-link-color" to="/about">About-Us</Link></li>
                <li><Link className="rm-link-color" to="/contact">Contact-Us</Link></li>
                <li> <Link className="rm-link-color" to="/cart">Cart</Link>   </li>
            </ul>
        </div>
    );
}

export default Nav;