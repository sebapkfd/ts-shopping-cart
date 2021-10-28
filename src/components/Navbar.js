import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartAmount from "./CartAmount";
import { useLocation } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar = () =>{
    const location = useLocation();
    const [style, setStyle] = useState('container');

    useEffect(() => {
        if (location.pathname === '/shopping-cart/catalog' || location.pathname === '/shopping-cart/cart') {
            setStyle('#f3f6fb');
        }
        else {
            setStyle('#fff');
        }
    }, [location])

    return (
        <div className={styles.container} style={{backgroundColor: [style]}}>
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
                    <span className="material-icons">shopping_bag</span>
                    <CartAmount />
                </div>
            </div>
        </div>
    )
}

export default Navbar;