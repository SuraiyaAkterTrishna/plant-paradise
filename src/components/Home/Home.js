import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className='top-banner'>
            <div className="banner-left">
                <h1 className='display-2'><span className='green'>Plant<FontAwesomeIcon icon={faLeaf} /></span>Paradise</h1>
            </div>
            <div className="banner-right">
                <h1>Hello from right part</h1>
            </div>
        </div>
    );
};

export default Home;