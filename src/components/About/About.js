import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="https://i.ibb.co/SxWQvJk/about-Me-Main.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Khairul Islam</Card.Title>
                    <Card.Text>
                        <small className='text-black'>
                            MY MISSION: TO MAKE THE LIFE &<br />
                            WORK OF CONSULTANTS EVEN BETTER
                        </small>
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br />
            <Card className='text-center'>
                <Card.Img className='w-75 mx-auto' variant="top" src="https://i.ibb.co/0Jy2V74/about-Me-Second.jpg" />
                <Card.Body>
                    <Card.Text>
                        “My greatest strength as a consultant is to be ignorant and ask a few questions.” “He who wants to do everything will never do anything.” “Those who have stopped learning find themselves equipped for a world that no longer exists.” “Consultant: any ordinary guy more than fifty miles from home.”
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card className='text-center mx-auto m-2'>
                <Card.Body>
                    <Card.Text>
                        The time to relax is when you don't have time for it!
                    </Card.Text>
                </Card.Body>
                <Card.Img className='w-75 mx-auto' variant="bottom" src="https://i.ibb.co/Pzhf7gX/about-Me-Third.jpg" />
            </Card>
        </div>
    );
};

export default About;