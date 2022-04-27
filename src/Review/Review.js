import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Review.css';
import Loading from '../components/Loading/Loading';


const Review = ({ review }) => {

    const { name, picture, comment, occupation } = review;

    if(!picture) {
        return <Loading></Loading>
    }

    return (
        <div className='text-center review-card m-3 p-2 mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='rounded-circle p-4' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='text-primary'>{name}</Card.Title>
                    <Card.Text>
                        <span className='text-success'>Review:</span> {comment}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><span className='text-success'>Occupation:</span> {occupation}</ListGroupItem>
                    <ListGroupItem className='mx-auto'><span className='text-success'>Rating:</span><ReactStars
                            count={5}
                            size={30}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ff0000"
                        />
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default Review;