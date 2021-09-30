import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="home">
            <div className="home-info">
                <h1>Find the right Computer for you!</h1>
            </div>
            <div className="home__buttons">
                <Link to='/shopping-cart/catalog'>
                    <button className="HomeButton">Start Shopping</button>
                </Link>
                <a href="https://github.com/sebapkfd/shopping-cart" target="_blank" rel="noreferrer">
                    <button className="HomeButton">Repository</button>
                </a>
            </div>
        </div>
    )
}

export default Home;