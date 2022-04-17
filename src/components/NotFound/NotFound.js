import React from 'react';
import './NotFound.css';
import errorPic from '../../image/404/404.gif';

const NotFound = () => {
    return (
        <div className='not-found-div'>
            <img src={errorPic} alt="404 Not found!" />
            <h1>404 Not found!</h1>
            <p><small>The page you're looking for is not found. Check your Internet connection</small></p>
        </div>
    );
};

export default NotFound;