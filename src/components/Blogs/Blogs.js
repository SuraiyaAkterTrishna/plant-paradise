import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <p>1. What is Context API? What is the purpose of Context API?</p>
                <p>- To send data from one component to another child component in React, it has to be sent as props. When data has to be sent from the main component to a component at a much lower level than the child component, the props have to be drilled to capture each component and then the data has to be sent to the lower component. The context API is used to fix this problem. Data can be passed directly from the main component to any component via the context API.</p>
            </div>
            <div>
                <p>2. What is Semantic tag?</p>
                <p>- Semantic tags clearly describe their meaning in a human and machine readable way. Semantic tag helps browsers and developers understand what will actually that element contains. By adding symantic tag in our code, we will provide more additional information about our code, that will make easy to understand the developer and browser what the meaning of the page and its content is, it will be very helpful to update and modify the code in future. Example - {`<header>, <footer> , <aside> , <nav> , <article>`} etc.</p>
            </div>
            <div>
                <p>3. What are the difference between Inline and block elements?</p>
                <p>- The elements that cover the entire space of the parent element is called block elements. Block elements always start with a new line and they take whole space of that line. Example of block elements - {`<div> , <ul> , <h1> - <h6> , <article> , <address>`}  etc. 

                Inline elements take place one after the other along a line. That is, inline elements occupy as much space as they need from the parent element. Example of inline elements - {`<a> , <button> , <img> , <small> , <span> `}etc.</p>
            </div>
        </div>
    );
};

export default Blogs;