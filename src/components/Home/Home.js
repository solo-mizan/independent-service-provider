import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className='text-center'>
            <Banner></Banner>
            <Services></Services>
            <Link className='text-decoration-none btn btn-danger text-center mb-3 w-50' to={'/reviews'}>See customer reviews</Link>
        </div>
    );
};

export default Home;