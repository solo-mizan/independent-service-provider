import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Review.css';
import Rating from 'react-rating';


const Review = ({ review }) => {

    const { name, picture, comment, rating, occupation } = review;

    return (
        <div className='text-center review-card m-3 p-2 mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='rounded-circle border-2 border border-success' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='text-primary'>{name}</Card.Title>
                    <Card.Text>
                        <span className='text-success'>Review:</span> {comment}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><span className='text-success'>Occupation:</span> {occupation}</ListGroupItem>
                    <ListGroupItem><span className='text-success'>Rating:</span><ReactStars
                        count={5}
                        size={30}
                        activeColor="#ffd700"
                    /></ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default Review;