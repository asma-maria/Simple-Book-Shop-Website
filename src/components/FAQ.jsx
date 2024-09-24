import React from 'react'

export default function FAQ() {
  return (
    <div className='text-center'>
      <div className="collapse collapse-arrow bg-sky-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What is React.js and Explain the concept of "components" in React.</div>
  <div className="collapse-content">
    <p>React.js is a JavaScript library for building user interfaces, especially for single-page applications. It allows developers to create reusable UI components that manage their own state, enhancing the efficiency and maintainability of web applications.

Components in React
In React, components are the fundamental building blocks of the UI. They can be categorized as:

Functional Components: Simple functions that return JSX (React elements) and can manage state using hooks.

Class Components: ES6 classes that extend React.Component, 
supporting lifecycle methods and state management.
</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-sky-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What is JSX in React, and how does it work?</div>
  <div className="collapse-content">
    <p>JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the structure of the user interface. It allows developers to write HTML-like code within JavaScript, 
        making it easier to visualize the UI structure.
        Syntax: JSX looks similar to HTML but is actually syntactic sugar for React.createElement() calls. 
        Embedding Expressions: You can embed JavaScript expressions within JSX using curly braces {}.
        </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-sky-400">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What is the Virtual DOM, and how does React use it to optimize performance?</div>
  <div className="collapse-content">
    <p>

    The Virtual DOM is a lightweight representation of the actual DOM (Document Object Model) used in web applications. 
    React utilizes the Virtual DOM to enhance performance and improve the efficiency of UI updates.
    </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-sky-500">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Explain the concept of "props" in React and how they are used.</div>
  <div className="collapse-content">
    <p>
    In React, props (short for "properties") are a way to pass data from a parent component to a child component. 
    They are immutable, meaning the child component cannot modify the props it receives.
    How Props are Used:
  1.Data Passing: Props enable components to receive data as attributes,
 allowing for dynamic rendering.
 2.Default Values: Default values can be set using defaultProps or destructuring with default parameters.
    </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-sky-600">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What is "state" in React, and how does it differ from props?</div>
  <div className="collapse-content">
    <p>
    In React, state is a built-in object that allows components to manage and track their own dynamic data over time.
     State is mutable, meaning it can be changed within the component, usually in response to user actions or events.
    </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-sky-700">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Explain the useState hook and provide an example of how it is used.</div>
  <div className="collapse-content">
    <p>
    The useState hook is a built-in React hook that allows functional components to manage local state. 
    It provides a way to declare state variables and update them without needing a class component
    </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-sky-800">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What is the purpose of the useEffect hook in React, and when would you use it?</div>
  <div className="collapse-content">
    <p>

    The useEffect hook in React is used to perform side effects in functional 
    components, such as data fetching, subscriptions, or manually changing the DOM. It allows you to run code in response to changes in state or props, effectively managing
     lifecycle events like component mounting, updating, and unmounting.
    </p>
  </div>
</div>
    </div>
    
  )
}
