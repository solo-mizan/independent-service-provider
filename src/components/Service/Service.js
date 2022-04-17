import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    
    const { name, price, picture, description } = service;

    return (
        <div className='service-card my-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='text-primary'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h3>Price: {price} taka</h3>
                    <Button as={Link} to={'/checkout'}  variant="success">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;