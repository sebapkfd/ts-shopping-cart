import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.png";

const Nav = (props) =>{
    const {amount} = props;

    return (
        <div className="navbar">
            <div>
                <Link to='/shopping-cart'>
                    <h1>Home</h1>
                </Link>
            </div>
            <div className="navbar__options">
                <ul>
                    <Link to='/shopping-cart/cart'>
                        <li>Cart</li>
                    </Link>
                    <Link to='/shopping-cart/catalog'>
                        <li>Catalog</li>
                    </Link>
                </ul>
                <div id="cart-icon">
                    <img src={CartIcon} alt="Cart"/>
                    <p id='cart-amount'>{amount}</p>
                </div>
            </div>
        </div>
    )
}

export default Nav;