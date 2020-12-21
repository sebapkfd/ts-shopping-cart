import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return(
        <div className="HomeDiv">
                <Link to='/Catalog'>
                    <button className="HomeButton">Start Shopping</button>
                </Link>
                <a href="https://github.com/sebapkfd/shopping-cart" target="_blank" rel="noreferrer">
                    <button className="HomeButton">
                        <img src="https://img.icons8.com/fluent-systems-filled/24/ffffff/github.png" alt="Github"/>
                    </button>
                </a>
        </div>
    )
}

export default Home;