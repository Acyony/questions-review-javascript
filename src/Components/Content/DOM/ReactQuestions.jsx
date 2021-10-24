import Question from "../../Question.jsx";
import React from "react";

let questions = [
    {
        question: "What is ReactJS? ",
        answer:
            `Library for building interaction interfaces`,
    },
    {
        question: "What advantages does ReactJS have?",
        answer:
            `Increases the application’s performance with Virtual DOM <br>
             JSX makes a code that is easy to read and write <br>
             It renders both on client and server side <br>
             Easy to integrate with other frameworks(Angular, BackboneJS) since it is only a view library`,
    },
    {
        question: "What disadvantages does ReactJS have? ",
        answer:
            `It is only a view layer. You have to plug your code for Ajax requests, events and so on. <br>
             The library is pretty large. <br>
             The learning curve can be slow.`,
    },
    {
        question: "Which are the correct name of React.js?",
        answer:
            `React.js is a free, open-source front-end JavaScript library used for building user interfaces or UI components. It is also known as React or ReactJS.`,

    },
    {
        question: "Which command is used to install create-react-app?",
        answer:
            `npx create-react-app my-app;<br>
             globally via npm install -g create-react-app; `,

    },
    {
        question: "What of the following is used in React.js to increase performance?",
        answer:
            ` Virtual DOM is used in React.js to increase performance.`,
    },
    {
        question: "React is mainly used for building ___.",
        answer:
            `  User interface.`,

    },
    {
        question: "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
        answer:
            `A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class.`,
    },
    {
        question: "Which keyword is used to create a class inheritance?",
        answer:
            ` The "Extends" keyword is used to create a class inheritance.`,
    },
    {
        question: "The lifecycle methods are mainly used for ___.",
        answer:
            `Freeing up resources`,
    },
    {
        question: "___ can be done while multiple elements need to be returned from a component. ",
        answer:
            `Wrapping`,
    },
    {
        question: "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
        answer:
            `<h1>{fetch()}</h1>`,
    },
    {
        question: "Which of the methods in a React Component should be overridden to stop the component from updating?",
        answer:
            `shouldComponentUpdate`,
    },
    {
        question: "What is used to pass data to a component from outside? ",
        answer:
            `props`,
    },
    {
        question: "Which of the methods in a React Component is called after the component is rendered for the first time?",
        answer:
            `componentDidMount`,
    },
    {
        question: "Which is the correct syntax for a button click event handler foo? ",
        answer:
            `button onClick={this.foo}>`,
    },
    {
        question: "What will happen if you call setState() inside render() method?",
        answer:
            `Stack overflow error`,
    },
    {
        question: "How do you write an inline style which specifies the font-size:12px and color:red; in JSX? ",
        answer:
            `style={{fontSize:'12px',color:'red'}}`,
    },

    {
        question: "What is state in React? ",
        answer:
            `An internal data store (object) of a component.`,
    },
    {
        question: "What are the two ways that data gets handled in React?",
        answer:
            `state & props`,
    },
    {
        question: "React merges the object provided into the current state using ___.",
        answer:
            `setState()`,
    },
    {
        question: "The arbitrary inputs of components are called ___.",
        answer:
            `Props`,
    },
    {
        question: "Ref is used for referring an element or component returned by ___.",
        answer:
            `render()`,
    },
    {
        question: "What is the default port where webpack-server runs?",
        answer:
            `The default port for webpack-server is 8080.`,
    },
    {
        question: "How many numbers of elements a valid react component can return?",
        answer:
            `In react component, we can return only one element.`,
    },
    {
        question: "What is the declarative way to render a dynamic list of components based on values in an array?",
        answer:
            `The Array.map() method is used to render a dynamic list of components based on values in an array.`,
    },
    {
        question: "How many ways of defining your variables in ES6?",
        answer:
            `In ES6, there are three ways of defining your variables: var, let, and const.`,
    },
    {
        question: "In which of the directory React.js components are saved?",
        answer:
            `The React.js components are saved in "Inside the js/components/."`,
    },
    {
        question: "Which API is a must API for every React.js component?",
        answer:
            `The renderComponent is a must API for every React.js component.`,
    },
    {
        question: "What is Babel?",
        answer:
            `Babel is a Compiler. <br>
             Babel is a Transpilar.<br>
             Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.`,
    },
    {
        question: "Does React.js create a VIRTUAL DOM in the memory?",
        answer:
            `Yes. React.js creates a VIRTUAL DOM in the memory.`,
    },
    {
        question: "What is the use of \"webpack\" command in React.js?",
        answer:
            `The "webpack" command is a module bundler.`,
    },
    {
        question: "What does ES6 stand for?",
        answer:
            `ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript. ES6 is the 6th version of ECMAScript published in 2015. It is also known as ECMAScript 2015.`,
    },
    {
        question: "Which method refers to the parent class in React.js?",
        answer:
            `The super() method refers to the parent class. <br>
             If you want to call the parent's constructor method and get access to the parent's properties and methods, you can achieve it by calling the super() method in the constructor.`,
    },

];

export default function ReactQuestions() {
    return <ul>
        {questions.map((q) => (
            <Question question={q.question} answer={q.answer}/>
        ))}
    </ul>
}