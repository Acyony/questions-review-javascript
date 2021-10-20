import Question from "../../Question.jsx";
import React from "react";

let questions = [
    {
        question: " What is Event?",
        answer:
            ` An HTML event can be something the browser does, or something a user does.`,

    },
    {
        question: "List some examples of HTML events:",
        answer:
            `- An HTML web page has finished loading;<br>
             - An HTML input field was changed; <br>
             - An HTML button was clicked`,
    },
    {
        question: "What is Event Listener(Handler)?",
        answer:
            ` An event listener is a procedure in JavaScript that waits for an event to occur <br>
               //.2.1
                let button_c = document.querySelector("button");  <br>
               //.2.2
                 let eventHandler = () => {
                 console.log("button clicked"); }; <br>
                //.2.3
                // button_c.addEventListener("click", eventHandler);`,
    },
    {
        question: "Name Two type of events",
        answer:
            `  1.Browser Events; <br>
               2.User Events; `,

    },
    {
        question: "What the removeEventListener() does?",
        answer:
            `  Remove an event that has been attached with the addEventListener() method. `,

    },
    {
        question: "Name some examples of JavaScript Events",
        answer:
            `  - change: An HTML element has been changed; <br>
               - click: The user clicks an HTML element; <br>
               - mouseover: The user moves the mouse over an HTML element or its children; <br>
               - mouseenter: the user moves the mouse into an HTML element; <br>
               - mousemove: The user moves the mouse inside an HTML element; <br>
               - mouseout: The user moves the mouse away from an HTML element; <br>
               - keydown: The user pushes a keyboard key; <br>
               - load: The browser has finished loading the page; <br>
               - submit: The user submits a form; <br>
               - keyup: The user releases a key on the keyboard  `,
    },

    {
        question: "What means Event Bubbling?",
        answer:
            `  Means when listener of an element listen the triggering of event, it will inform upper levels, if they have listener for the same event. `,

    },
    {
        question: "What means  event bubbling phase? ",
        answer:
            ` The bubbling phase, where the event bubbles up from the originating node to the parent element, grandparent, and all the way up to window.`,
    },
    {
        question: "What is Event Propagation? ",
        answer:
            `  Event propagation occurs when an event is fired on a DOM element. The event is also triggered by the parent elements.`,
    },
    {
        question: "What does the event.stopPropagation()? ",
        answer:
            `  The event.stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.`,
    },
    {
        question: "What is the event capturing? ",
        answer:
            ` Event capturing is the reverse of event bubbling. This means that events starts from the window all the way to the element that triggered the event.

`,
    },
    {
        question: "Name the three Event Propagation phases.",
        answer:
            ` 1 - capturing phase — event starts from window then goes down all the way to child elements until it reaches the target element. <br>
              2 - target phase — event has reached the target element. <br>
              3 - bubbling — event bubbles up from the target element and goes up all the way to the window.`,
    },

];

export default function Events() {
    return <ul>
        {questions.map((q) => (
            <Question question={q.question} answer={q.answer}/>
        ))}
    </ul>
}