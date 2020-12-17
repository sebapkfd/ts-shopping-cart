import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{
    return (
        <nav>
            <Link to='/'>
                <h3>Logo</h3>
            </Link>
            <ul>
                <Link to='/catalog'>
                    <li>Catalog</li>
                </Link>
                <Link to='/cart'>
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;