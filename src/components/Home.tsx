import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';
import home from '../assets/thumbnails/home.png';

const Home = () => {
    return(
        <div className={styles.page}>
            <div className={styles.thumbnail}>
                <img src={home} alt={'homeImg'}/>
            </div>
            <div className={styles.intro}>
                <h1>The best technology for you</h1>
                <p>We are devoted to provide the best services and technology options to satisfy our customer’s needs</p>
                <Link to='/ts-shopping-cart/catalog'>
                    <button>Start Shopping</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;