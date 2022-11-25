import React from 'react';
import difference from '../../assets/images/angular-vs-react-vs-vuejs.png'

const Blog = () => {
    return (
        <div className='mt-8'>
            <div>
                <h2 className='text-primary text-2xl font-bold'>What are the different ways to manage a state in a React application?</h2> <br />
                <p className='text-lg text-justify'>
                    <strong>Answer:</strong> There are four main types of state you need to properly manage in your React apps:
                    <li><strong>Local State:</strong> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.</li>
                    <li><strong>Global State:</strong> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</li>
                    <li><strong>Server State:</strong> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</li>
                    <li><strong>URL State:</strong> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</li>
                </p>
            </div>

            <div className='mt-8 mb-8'>
                <p className='text-primary text-2xl font-bold'>How does prototypical inheritance work?</p> <br />
                <p className='text-lg text-justify'>
                    <strong>Answer:</strong> Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                </p>

            </div>

            <div className='mb-8'>
                <p className='text-primary text-2xl font-bold'>What is a unit test? Why should we write unit tests?</p> <br />
                <p className='text-lg text-justify'>
                    <strong>Answer:</strong> Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

            </div>
            <div className='mb-8'>
                <p className='text-primary font-bold text-2xl'>React vs. Angular vs. Vue?</p> <br />
                <img src={difference} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default Blog;