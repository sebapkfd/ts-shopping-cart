import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{
    return (
        <div className="NavDiv">
            <Link to='/'>
                <h1>Home</h1>
            </Link>
            <ul>
                <Link to='/cart'>
                    <li>Cart</li>
                </Link>
                <Link to='/catalog'>
                    <li>Catalog</li>
                </Link>
                
            </ul>
        </div>
    )
}

export default Nav;