import Question from "../../Question.jsx";
import React from "react";

let questions = [
    {
        question: "How to add a class?",
        answer:
            `let p = document.querySelector("p");<br>
              p.classList.add("pinkColor", "newClass");`,

    },
    {
        question: "How to remove a class?",
        answer:
            `let leftDiv = document.querySelector(".left");<br>
             leftDiv.classList.remove("left", "container"); `,

    },
    {
        question: "How to use the toggle to (add/remove) a class?",
        answer:
            ` listItems[0].classList.toggle("red"); <br>
               *** Note: classList property can be used only for one element.
               if you have a collection of elements, first make a loop over them and 
               use classList for every element inside the array.`,
    },
    {
        question: "What does the element.InnerText?",
        answer:
            `  Return the text of that element. <br>
               p.innerText += "New content"; `,

    },
    {
        question: "What does the element.innerHTML",
        answer:
            `Return the  content of an element.  <br>
             rightDiv.innerHTML += "<strong>This is a new content</strong>".`,
    },
    {
        question: "How to create HTML elements ",
        answer:
            ` let button = document.createElement("button");<br>
               button.innerText = "Submit";`,
    },
    {
        question: "How to append one element into another?",
        answer:
            `   parentElement.append(childElement)`,
    },
    {
        question: "How create unknown elements? ",
        answer:
            `  let myElem = document.createElement("name"); <br>
               myElem.innerText = "Some text here...";`,
    },

];

export default function DOMManipulating() {
    return <ul>
        {questions.map((q) => (
            <Question question={q.question} answer={q.answer}/>
        ))}
    </ul>
}