import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-div'>
            <h2 className='text-success'>What is the difference between authorization and authentication?</h2>
            <p>Authentication is the process of recognizing a user’s identity. It is the mechanism of associating an incoming request with a set of identifying credentials. The credentials provided are compared to those on a file in a database of the authorized user’s information on a local operating system or within an authentication server.
                <br />
                On the other hand, Authorization is a security mechanism to determine access levels or user/client privileges related to system resources including files, services, computer programs, data and application features. This is the process of granting or denying access to a network resource which allows the user access to various resources based on the user's identity.
            </p>
            <br />
            <br />
            <h2 className='text-success'> Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase is a software development platform offered by Google. It helps to quickly build web applications without managing infrastructure. Before we discuss the pros and cons of using Firebase, let’s cover its best features.
                <br />
                I'm using firebase for:
                <ul>
                    <li>Firebase is easy to use.</li>
                    <li>Firebase security is very strong.</li>
                </ul>
                <h3>In order to use firebase, we have to implement:</h3>
                <ul>
                    <li>Install firebase hooks to our react project</li>
                    <li>Setting up firebase account.</li>
                    <li>Create a new project on firebase website.</li>
                </ul>


            </p>
            <br />
            <br />
            <h2 className='text-success'>What other services does firebase provide other than authentication.</h2>
            <p>Google firebase other services are: <ul>
                <li>Authentication — for sign up, sign in.</li>
                <li>Hosting — to serve my web app for users globally.</li>
                <li>Cloud Firestore — real-time database with a user-friendly admin dashboard.</li>
                <li>Cloud Storage — suitable for storing media content like images, files.</li>
                <li>Cloud Functions — scalable solution to process data and virtually call any other actions.</li>
            </ul></p>
        </div>
    );
};

export default Blogs;