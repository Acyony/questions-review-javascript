import Question from "../../Question";
import React from "react";

let questions = [
    {
        question: "What is the DOM?",
        answer:
            `DOM stands for the Document Object Model. It’s the API for HTML and XML documents. The DOM is a tool for manipulating data, not a data structure itself.`,

    },
    {
        question: "Which object represents the DOM in the browser?",
        answer:
            `The JavaScript "document" object. `,

    },
    {
        question: "How it's possible to  manipulate the DOM tree?",
        answer:
            ` by finding elements in the DOM tree and then manipulate them by calling the methods or set the properties on the object that’s found. `,

    },
    {
        question: "Which methods allow us to get a HTML element into a JavaScript variable?",
        answer:
            ` -document.getElementById(); <br>
              - document.getElementByClassName(); <br>
              - document.querySelector(); <br>
              - document.querySelectorAll `,

    },
    {
        question: "A “root” object (window) has two roles:",
        answer:
            `1 - First, it is a global object for JavaScript code, as described in the chapter Global object.<br>2 - Second, it represents the “browser window” and provides methods to control it.`,

    },
    {
        question: "DOM Object Model (DOM), represents... ",
        answer:
            ` All page content as objects that can be modified. The document object is the main “entry point” to the page. We can change or create anything on the page using it.`,
    },
    {
        question: "How it's possible to manipulate a group of objects in JavaScript? ",
        answer:
            `  By using document.querySelectorAll to select a group of elements by CSS selector. It returns an array-like object which we can iterate through change things.`,
    },

    {
        question: "What is a DOM implementation?",
        answer:
            ` A DOM implementation (also called a host implementation) is that piece of software which takes the parsed XML or HTML document and makes it available for processing via the DOM interfaces. A browser contains a hosting implementation, for example.`,
    },
    {
        question: "What is a DOM application?",
        answer:
            ` A DOM application (also called a client application) is that piece of software which takes the document made available by the implementation, and does something to it. A script which runs in a browser is an example of an application.`,
    },
    {
        question: " What is Javascript?",
        answer:
            `  - It is a scripting language <br>
               - It is used for web <br>
               - It makes the web page alive ( more interactive)  <br>
               - Dont need special preparation or compilation to run`,
    },
    {
        question: " Why is it called JavaScript?",
        answer:
            `  - No relationship to Java <br>
               - It's only a marketing strategy <br>
               - Initially it was called livescript  <br>`,
    },
    {
        question: " What is ECMAScript?",
        answer:
            `  - specification of javascript <br>
               - it describe the javascript constructs <br>
               - the popular version ECMA-6 (release 2015)  <br>`,
    },
    {
        question: " Javascript execution environment",
        answer:
            `  - every environment that support JS <br>
               - initially it was designed only for web browsers <br>
               - Now we can execute the javascript code on Nodejs environment as well.  <br>`,
    },
    {
        question: " What is Javascript engine?",
        answer:
            `  - JS engine is responsible to execute the JS code <br>
               - It is exist inside the browser and Nodejs <br>
               - V8 in chrome/Opera  but SpiderMonkey in firefox and chakra in IE <br>`,
    },
    {
        question: " How do engines work?",
        answer:
            `  1. reading the script (parsing) <br>
               2. convert the code into machine language <br>
               3. machine can runs the code, pretty fast. <br>`,
    },
    {
        question: " Window object",
        answer:
            `  - it's a top level global object <br>
               - everything from our webpage exist in the windows <br>
               - it contains document object which is one of important objects for DOM <br>
               - it is a platform specific object and designed only for browsers not Nodejs`,
    },
];

export default function DOMIntroduction() {
    return <ul>
        {questions.map((q) => (
            <Question question={q.question} answer={q.answer}/>
        ))}
    </ul>
}