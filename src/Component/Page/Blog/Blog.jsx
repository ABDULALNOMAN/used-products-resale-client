import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-6'>
            <h1 className='text-yellow-600 text-2xl font-bold'>What are the different ways to manage a state in a React application?</h1>
            <div className='ml-8'>
                <h4 className='text-teal-500 text-lg capitalize font-semibold'>there are 4 different ways to manage a state in a React application</h4>
                <div>
                    <h3>local state</h3>
                    <p>Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</p>
                </div>
                <div>
                    <h4 className='text-teal-500 text-lg capitalize font-semibold'>Global state</h4>
                    <p>Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                </div>
                <div>
                    <h4 className='text-teal-500 text-lg capitalize font-semibold'>server state</h4>
                    <p> Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</p>
                </div>
                <div>
                    <h4 className='text-teal-500 text-lg capitalize font-semibold'>url state</h4>
                    <p>Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                </div>
            </div>
            <div>
                <h1 className='text-yellow-600 text-2xl font-bold'>How does prototypical inheritance work</h1>
                <h4 className='ml-8'>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto</h4>
            </div>
            <div>
                <h1 className='text-yellow-600 text-2xl font-bold'> What is a unit test? Why should we write unit tests?</h1>
                <div className='ml-8'>
                    <h4 className='text-teal-500 text-lg capitalize font-semibold'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system</h4>
                    <p>Unit tests provide a fundamental check that an application meets its software design specifications and behaves as intended</p>
                </div>
            </div>
            <div>
                <h1 className='text-yellow-600 text-2xl font-bold'>React vs. Angular vs. Vue?</h1>
                <div className='ml-8'>
                    <h4 className='text-teal-500 text-lg capitalize font-semibold'>Angular</h4>
                    <p>In Angular, components are referred to as directives. Directives are just markers on DOM elements, which Angular can track and attach specific behavior too. Therefore, Angular separates the UI part of components as attributes of HTML tags, and their behaviors in the form of JavaScript code. This is what sets it apart when looking at Angular vs React.</p>
                </div>
                <div className='ml-8'>
                    <h4 className='text-teal-500 text-lg capitalize font-semibold'>React</h4>
                    <p>React, interestingly, combines the UI and behavior of components. For instance, here is the code to create a hello world component in React. In React, the same part of the code is responsible for creating a UI element and dictating its behavior.</p>
                </div>
                <div className='ml-8'>
                    <h4 className='text-teal-500 text-lg capitalize font-semibold'>vue</h4>
                    <p>When looking into Vue vs React, in Vue, UI and behavior are also a part of components, which makes things more intuitive. Also, Vue is highly customizable, which allows you to combine the UI and behavior of components from within a script. Further, you can also use pre-processors in Vue rather than CSS, which is a great functionality. Vue is great when it comes to integration with other libraries</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;