import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';

const Home = () => {
    return(
        <div className={styles.page}>
            <div className={styles.info}>
                <h1>Find the right Computer for you!</h1>
            </div>
            <Link to='/shopping-cart/catalog'>
                <button>Start Shopping</button>
            </Link>
        </div>
    )
}

export default Home;