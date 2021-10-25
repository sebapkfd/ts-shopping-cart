import React from "react";
import { Link } from "react-router-dom";
import CartAmount from "./CartAmount";
import styles from '../styles/navbar.module.css';

const Navbar = () =>{
    return (
        <div className={styles.container}>
            <div>
                <Link to='/shopping-cart'>
                    <p className={styles.homeLink}>Home</p>
                </Link>
            </div>
            <div className={styles.options}>
                <Link to='/shopping-cart/catalog'>
                    <p>Catalog</p>
                </Link>
                <Link to='/shopping-cart/cart'>
                    <p>Cart</p>
                </Link>
                <div className={styles.cartIcon}>
                    <span class="material-icons">shopping_bag</span>
                    <CartAmount />
                </div>
            </div>
        </div>
    )
}

export default Navbar;