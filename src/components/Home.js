import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Hello from Home</h1>
            <Link to='/Catalog'>
                <button>Start Shopping</button>
            </Link>
        </div>
    )
}

export default Home;