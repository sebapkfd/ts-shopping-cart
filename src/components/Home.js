import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return(
        <div className="HomeDiv">
                <Link to='/Catalog'>
                    <button className="HomeButton">Start Shopping</button>
                </Link>
                <a href="https://github.com/sebapkfd/shopping-cart" target="_blank" rel="noreferrer">
                    <button className="HomeButton">Repository</button>
                </a>
        </div>
    )
}

export default Home;