import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.png";
import CartAmount from "./CartAmount";
import styles from '../styles/navbar.module.css';

const Navbar = () =>{

    return (
        <div className={styles.navbar}>
            <div>
                <Link to='/shopping-cart'>
                    <p id='home-link'>Home</p>
                </Link>
            </div>
            <div className={styles.navbarOptions}>
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