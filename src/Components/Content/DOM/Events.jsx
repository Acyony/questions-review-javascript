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
];

export default function Events() {
    return <ul>
        {questions.map((q) => (
            <Question question={q.question} answer={q.answer}/>
        ))}
    </ul>
}