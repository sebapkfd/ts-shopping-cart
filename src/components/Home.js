import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';

const Home = () => {
    return(
        <div className={styles.home}>
            <div className={styles.homeInfo}>
                <h1>Find the right Computer for you!</h1>
            </div>
            <div>
                <Link to='/shopping-cart/catalog'>
                    <button className={styles.homeButton}>Start Shopping</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;