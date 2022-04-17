import React, { useEffect, useState } from 'react';
import Review from '../../Review/Review';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className='review-cards'>
            {
                reviews.map(review => <Review
                key={review._id}
                review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;