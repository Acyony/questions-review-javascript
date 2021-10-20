import Question from "../../Question";
import React from "react";

let questions = [
    {
        question: "What's means Traversing?",
        answer:
            `Traversing: Means jumping from one element to its relative.`,

    },
    {
        question: "What means node objects?",
        answer:
            `The node objects means any type of object in DOM tree.`,

    },
    {
        question: "What means Element?",
        answer:
            ` Element is a particular type of node which is a HTML tag.
 `,

    },
    {
        question: "What is the return value from the Element.closest('css-selector')?",
        answer:
            `return the nearest ancestor that match with css-selector `,
    },

];

export default function TraversingDOMQuestions() {
    return <ul>
        {questions.map((q) => (
            <Question question={q.question} answer={q.answer}/>
        ))}
    </ul>
}