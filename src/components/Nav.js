import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.png";

const Nav = (props) =>{

    const {items} = props;
    const amounts = items.map(item => item.amount);
    const amountInCart = amounts.reduce((acc, cv) => acc + cv);

    return (
        <div className="NavDiv">
            <div>
                <Link to='/'>
                    <h1>Home</h1>
                </Link>
            </div>
            <div className="Options">
                <ul>
                    <Link to='/cart'>
                        <li>Cart</li>
                    </Link>
                    <Link to='/catalog'>
                        <li>Catalog</li>
                    </Link>
                </ul>
                <div id="CartIconDiv">
                    <img src={CartIcon} alt="Cart"/>
                    <p id='AmountInCart'>{amountInCart}</p>
                </div>
            </div>
        </div>
    )
}

export default Nav;