import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Hello from Home</h1>
            <Link to='/Catalog'>
                <button>Start Shopping</button>
            </Link>
            <a href="https://github.com/sebapkfd/shopping-cart" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/fluent-systems-filled/24/ffffff/github.png" alt="Github"/>
                <p>Repository</p>
            </a>
        </div>
    )
}

export default Home;