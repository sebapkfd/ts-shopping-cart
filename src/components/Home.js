import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';
import home from '../assets/thumbnails/home.png';
import acer from '../assets/icons/acer.png';
import asus from '../assets/icons/asus.png';
import msi from '../assets/icons/msi.png';
import razer from '../assets/icons/razer.png';
import lg from '../assets/icons/lg.png';

const Home = () => {
    return(
        <div className={styles.page}>
            <div className={styles.info}>
                <div className={styles.thumbnail}>
                    <img src={home} alt={'homeImg'}/>
                </div>
                <div className={styles.intro}>
                    <h1>The best technology for you</h1>
                    <p>We are devoted to provide the best services and technology options to satisfy our customer’s needs</p>
                    <Link to='/shopping-cart/catalog'>
                        <button>Start Shopping</button>
                    </Link>
                </div>
            </div>
            <div className={styles.brands}>
                <h1>Partner Brands</h1>
                <div>
                    <img src={acer} alt='acer'/>
                    <img src={asus} alt='asus'/>
                    <img src={msi} alt='msi'/>
                    <img src={razer} alt='razer'/>
                    <img src={lg} alt='lg'/>
                </div>
            </div>
            {/* <div className={styles.aboutUs}>
                <h1>About Us</h1>
            </div> */}
        </div>
    )
}

export default Home;