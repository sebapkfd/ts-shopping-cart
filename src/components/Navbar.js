import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.png";
import CartAmount from "./CartAmount";

const Navbar = () =>{

    return (
        <div className="navbar">
            <div>
                <Link to='/shopping-cart'>
                    <h1>Home</h1>
                </Link>
            </div>
            <div className="navbar__options">
                <Link to='/shopping-cart/catalog'>
                    <p>Catalog</p>
                </Link>
                <Link to='/shopping-cart/cart'>
                    <p>Cart</p>
                </Link>
                <div id="cart-icon">
                    <img src={CartIcon} alt="Cart"/>
                    <CartAmount />
                </div>
            </div>
        </div>
    )
}

export default Navbar;