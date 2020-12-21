import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return(
        <div className="HomeDiv">
            <div className="HomeInfoDiv">
                <h1 className="HomeInfo">Find the right Computer</h1>
                <h1 className="HomeInfo">for you!</h1>
            </div>
            <div className="HomeButtonsDiv">
                <Link to='/Catalog'>
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