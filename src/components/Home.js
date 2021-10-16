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
                    <button className="home-button">Start Shopping</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;