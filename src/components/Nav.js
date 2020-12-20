import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) =>{

    const {items} = props;
    const amounts = items.map(item => item.amount);
    const amountInCart = amounts.reduce((acc, cv) => acc + cv);

    return (
        <div className="NavDiv">
            <Link to='/'>
                <h1>Home</h1>
            </Link>
            <div className="Options">
                <ul>
                    <Link to='/cart'>
                        <li>Cart</li>
                    </Link>
                    <Link to='/catalog'>
                        <li>Catalog</li>
                    </Link>
                </ul>
                <p id='AmountInCart'>In cart: {amountInCart}</p>
            </div>
        </div>
    )
}

export default Nav;