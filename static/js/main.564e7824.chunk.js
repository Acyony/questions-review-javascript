(this["webpackJsonpquestions-review-javascript"]=this["webpackJsonpquestions-review-javascript"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(17),o=n.n(r),i=(n(26),n(8)),h=(n(27),n(3)),l=n(2),c=n.p+"static/media/Saly-10.5b1bc29f.png",u=n(0);var b=function(){return Object(u.jsxs)("div",{className:"container ",children:[Object(u.jsx)("h1",{className:"text-center mt-4 mb-4",children:"Welcome to Learning JavaScript is funny!"}),Object(u.jsx)("img",{className:"img-thumbnail rounded",src:c,alt:""})]})};var m,d,v=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("ul",{className:"list-group m-md-5",children:[Object(u.jsx)("li",{className:"list-group-item",children:Object(u.jsx)(h.b,{to:"/dom/introduction",children:"Introduction"})}),Object(u.jsx)("li",{className:"list-group-item",children:Object(u.jsx)(h.b,{to:"/dom/manipulating",children:"Manipulating"})}),Object(u.jsx)("li",{className:"list-group-item",children:Object(u.jsx)(h.b,{to:"/dom/traversing",children:"Traversing"})}),Object(u.jsx)("li",{className:"list-group-item",children:Object(u.jsx)(h.b,{to:"/dom/browserEvents",children:"BrowserEvents"})})]})})},p=n(13),w=n(14),g=w.a.div(m||(m=Object(p.a)(["\n  margin: 2rem 8rem;\n"]))),j=w.a.div(d||(d=Object(p.a)(["\n  //background-color: #ddffe7;\n"]))),f=a.a.createContext(),T=function(e,t){return"toggleShowAnswer"===t.type?{showAnswer:!e.showAnswer}:e};function y(e){var t=e.question,n=e.answer,a=Object(s.useReducer)(T,{showAnswer:!1}),r=Object(i.a)(a,2),o=r[0],h=r[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(f.Provider,{children:Object(u.jsx)(g,{children:Object(u.jsxs)(j,{children:[Object(u.jsx)("h4",{children:t}),o.showAnswer&&Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:n}}),Object(u.jsx)("button",{onClick:function(){return h({type:"toggleShowAnswer"})},children:o.showAnswer?"Hide Answer":"Show Answer"})]})})})})}var q=[{question:"How to add a class?",answer:'let p = document.querySelector("p");<br>\n              p.classList.add("pinkColor", "newClass");'},{question:"How to remove a class?",answer:'let leftDiv = document.querySelector(".left");<br>\n             leftDiv.classList.remove("left", "container"); '},{question:"How to use the toggle to (add/remove) a class?",answer:' listItems[0].classList.toggle("red"); <br>\n               *** Note: classList property can be used only for one element.\n               if you have a collection of elements, first make a loop over them and \n               use classList for every element inside the array.'},{question:"What does the element.InnerText?",answer:'  Return the text of that element. <br>\n               p.innerText += "New content"; '},{question:"What does the element.innerHTML",answer:'Return the  content of an element.  <br>\n             rightDiv.innerHTML += "<strong>This is a new content</strong>".'},{question:"How to create HTML elements ",answer:' let button = document.createElement("button");<br>\n               button.innerText = "Submit";'},{question:"How to append one element into another?",answer:"   parentElement.append(childElement)"},{question:"How create unknown elements? ",answer:'  let myElem = document.createElement("name"); <br>\n               myElem.innerText = "Some text here...";'}];function O(){return Object(u.jsx)("ul",{children:q.map((function(e){return Object(u.jsx)(y,{question:e.question,answer:e.answer})}))})}var x=[{question:"What is the DOM?",answer:"DOM stands for the Document Object Model. It\u2019s the API for HTML and XML documents. The DOM is a tool for manipulating data, not a data structure itself."},{question:"Which object represents the DOM in the browser?",answer:'The JavaScript "document" object. '},{question:"How it's possible to  manipulate the DOM tree?",answer:" by finding elements in the DOM tree and then manipulate them by calling the methods or set the properties on the object that\u2019s found. "},{question:"Which methods allow us to get a HTML element into a JavaScript variable?",answer:" -document.getElementById(); <br>\n              - document.getElementByClassName(); <br>\n              - document.querySelector(); <br>\n              - document.querySelectorAll "},{question:"A \u201croot\u201d object (window) has two roles:",answer:"1 - First, it is a global object for JavaScript code, as described in the chapter Global object.<br>2 - Second, it represents the \u201cbrowser window\u201d and provides methods to control it."},{question:"DOM Object Model (DOM), represents... ",answer:" All page content as objects that can be modified. The document object is the main \u201centry point\u201d to the page. We can change or create anything on the page using it."},{question:"How it's possible to manipulate a group of objects in JavaScript? ",answer:"  By using document.querySelectorAll to select a group of elements by CSS selector. It returns an array-like object which we can iterate through change things."},{question:"What is a DOM implementation?",answer:" A DOM implementation (also called a host implementation) is that piece of software which takes the parsed XML or HTML document and makes it available for processing via the DOM interfaces. A browser contains a hosting implementation, for example."},{question:"What is a DOM application?",answer:" A DOM application (also called a client application) is that piece of software which takes the document made available by the implementation, and does something to it. A script which runs in a browser is an example of an application."},{question:" What is Javascript?",answer:"  - It is a scripting language <br>\n               - It is used for web <br>\n               - It makes the web page alive ( more interactive)  <br>\n               - Dont need special preparation or compilation to run"},{question:" Why is it called JavaScript?",answer:"  - No relationship to Java <br>\n               - It's only a marketing strategy <br>\n               - Initially it was called livescript  <br>"},{question:" What is ECMAScript?",answer:"  - specification of javascript <br>\n               - it describe the javascript constructs <br>\n               - the popular version ECMA-6 (release 2015)  <br>"},{question:" Javascript execution environment",answer:"  - every environment that support JS <br>\n               - initially it was designed only for web browsers <br>\n               - Now we can execute the javascript code on Nodejs environment as well.  <br>"},{question:" What is Javascript engine?",answer:"  - JS engine is responsible to execute the JS code <br>\n               - It is exist inside the browser and Nodejs <br>\n               - V8 in chrome/Opera  but SpiderMonkey in firefox and chakra in IE <br>"},{question:" How do engines work?",answer:"  1. reading the script (parsing) <br>\n               2. convert the code into machine language <br>\n               3. machine can runs the code, pretty fast. <br>"},{question:" Window object",answer:"  - it's a top level global object <br>\n               - everything from our webpage exist in the windows <br>\n               - it contains document object which is one of important objects for DOM <br>\n               - it is a platform specific object and designed only for browsers not Nodejs"}];function L(){return Object(u.jsx)("ul",{children:x.map((function(e){return Object(u.jsx)(y,{question:e.question,answer:e.answer})}))})}var M=[{question:"What's means Traversing?",answer:"Traversing: Means jumping from one element to its relative."},{question:"What means node objects?",answer:"The node objects means any type of object in DOM tree."},{question:"What means Element?",answer:" Element is a particular type of node which is a HTML tag.\n "},{question:"What is the return value from the Element.closest('css-selector')?",answer:"return the nearest ancestor that match with css-selector "}];function E(){return Object(u.jsx)("ul",{children:M.map((function(e){return Object(u.jsx)(y,{question:e.question,answer:e.answer})}))})}var H=[{question:" What is Event?",answer:" An HTML event can be something the browser does, or something a user does."},{question:"List some examples of HTML events:",answer:"- An HTML web page has finished loading;<br>\n             - An HTML input field was changed; <br>\n             - An HTML button was clicked"},{question:"What is Event Listener(Handler)?",answer:' An event listener is a procedure in JavaScript that waits for an event to occur <br>\n               //.2.1\n                let button_c = document.querySelector("button");  <br>\n               //.2.2\n                 let eventHandler = () => {\n                 console.log("button clicked"); }; <br>\n                //.2.3\n                // button_c.addEventListener("click", eventHandler);'},{question:"Name Two type of events",answer:"  1.Browser Events; <br>\n               2.User Events; "},{question:"What the removeEventListener() does?",answer:"  Remove an event that has been attached with the addEventListener() method. "},{question:"Name some examples of JavaScript Events",answer:"  - change: An HTML element has been changed; <br>\n               - click: The user clicks an HTML element; <br>\n               - mouseover: The user moves the mouse over an HTML element or its children; <br>\n               - mouseenter: the user moves the mouse into an HTML element; <br>\n               - mousemove: The user moves the mouse inside an HTML element; <br>\n               - mouseout: The user moves the mouse away from an HTML element; <br>\n               - keydown: The user pushes a keyboard key; <br>\n               - load: The browser has finished loading the page; <br>\n               - submit: The user submits a form; <br>\n               - keyup: The user releases a key on the keyboard  "},{question:"What means Event Bubbling?",answer:"  Means when listener of an element listen the triggering of event, it will inform upper levels, if they have listener for the same event. "},{question:"What means  event bubbling phase? ",answer:" The bubbling phase, where the event bubbles up from the originating node to the parent element, grandparent, and all the way up to window."},{question:"What is Event Propagation? ",answer:"  Event propagation occurs when an event is fired on a DOM element. The event is also triggered by the parent elements."},{question:"What does the event.stopPropagation()? ",answer:"  The event.stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed."},{question:"What is the event capturing? ",answer:" Event capturing is the reverse of event bubbling. This means that events starts from the window all the way to the element that triggered the event.\n\n"},{question:"Name the three Event Propagation phases.",answer:" 1 - capturing phase \u2014 event starts from window then goes down all the way to child elements until it reaches the target element. <br>\n              2 - target phase \u2014 event has reached the target element. <br>\n              3 - bubbling \u2014 event bubbles up from the target element and goes up all the way to the window."}];function k(){return Object(u.jsx)("ul",{children:H.map((function(e){return Object(u.jsx)(y,{question:e.question,answer:e.answer})}))})}var W=[{question:" What is AddEventListener?",answer:" An HTML event can be something the browser does, or something a user does."},{question:"List some examples of HTML events:",answer:"- An HTML web page has finished loading;<br>\n             - An HTML input field was changed; <br>\n             - An HTML button was clicked"},{question:"What is Event Listener(Handler)?",answer:' An event listener is a procedure in JavaScript that waits for an event to occur <br>\n               //.2.1\n                let button_c = document.querySelector("button");  <br>\n               //.2.2\n                 let eventHandler = () => {\n                 console.log("button clicked"); }; <br>\n                //.2.3\n                // button_c.addEventListener("click", eventHandler);'},{question:"Name Two type of events",answer:"  1.Browser Events; <br>\n               2.User Events; "},{question:"What the removeEventListener() does?",answer:"  Remove an event that has been attached with the addEventListener() method. "},{question:"Name some examples of JavaScript Events",answer:"  - change: An HTML element has been changed; <br>\n               - click: The user clicks an HTML element; <br>\n               - mouseover: The user moves the mouse over an HTML element or its children; <br>\n               - mouseenter: the user moves the mouse into an HTML element; <br>\n               - mousemove: The user moves the mouse inside an HTML element; <br>\n               - mouseout: The user moves the mouse away from an HTML element; <br>\n               - keydown: The user pushes a keyboard key; <br>\n               - load: The browser has finished loading the page; <br>\n               - submit: The user submits a form; <br>\n               - keyup: The user releases a key on the keyboard  "},{question:"What means Event Bubbling?",answer:"  Means when listener of an element listen the triggering of event, it will inform upper levels, if they have listener for the same event. "},{question:"What means  event bubbling phase? ",answer:" The bubbling phase, where the event bubbles up from the originating node to the parent element, grandparent, and all the way up to window."},{question:"What is Event Propagation? ",answer:"  Event propagation occurs when an event is fired on a DOM element. The event is also triggered by the parent elements."},{question:"What does the event.stopPropagation()? ",answer:"  The event.stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed."},{question:"What is the event capturing? ",answer:" Event capturing is the reverse of event bubbling. This means that events starts from the window all the way to the element that triggered the event.\n\n"},{question:"Name the three Event Propagation phases.",answer:" 1 - capturing phase \u2014 event starts from window then goes down all the way to child elements until it reaches the target element. <br>\n              2 - target phase \u2014 event has reached the target element. <br>\n              3 - bubbling \u2014 event bubbles up from the target element and goes up all the way to the window."}];function A(){return Object(u.jsx)("ul",{children:W.map((function(e){return Object(u.jsx)(y,{question:e.question,answer:e.answer})}))})}var S=[{question:" What is Remove EventListener?",answer:" An HTML event can be something the browser does, or something a user does."},{question:"List some examples of HTML events:",answer:"- An HTML web page has finished loading;<br>\n             - An HTML input field was changed; <br>\n             - An HTML button was clicked"},{question:"What is Event Listener(Handler)?",answer:' An event listener is a procedure in JavaScript that waits for an event to occur <br>\n               //.2.1\n                let button_c = document.querySelector("button");  <br>\n               //.2.2\n                 let eventHandler = () => {\n                 console.log("button clicked"); }; <br>\n                //.2.3\n                // button_c.addEventListener("click", eventHandler);'},{question:"Name Two type of events",answer:"  1.Browser Events; <br>\n               2.User Events; "},{question:"What the removeEventListener() does?",answer:"  Remove an event that has been attached with the addEventListener() method. "},{question:"Name some examples of JavaScript Events",answer:"  - change: An HTML element has been changed; <br>\n               - click: The user clicks an HTML element; <br>\n               - mouseover: The user moves the mouse over an HTML element or its children; <br>\n               - mouseenter: the user moves the mouse into an HTML element; <br>\n               - mousemove: The user moves the mouse inside an HTML element; <br>\n               - mouseout: The user moves the mouse away from an HTML element; <br>\n               - keydown: The user pushes a keyboard key; <br>\n               - load: The browser has finished loading the page; <br>\n               - submit: The user submits a form; <br>\n               - keyup: The user releases a key on the keyboard  "},{question:"What means Event Bubbling?",answer:"  Means when listener of an element listen the triggering of event, it will inform upper levels, if they have listener for the same event. "},{question:"What means  event bubbling phase? ",answer:" The bubbling phase, where the event bubbles up from the originating node to the parent element, grandparent, and all the way up to window."},{question:"What is Event Propagation? ",answer:"  Event propagation occurs when an event is fired on a DOM element. The event is also triggered by the parent elements."},{question:"What does the event.stopPropagation()? ",answer:"  The event.stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed."},{question:"What is the event capturing? ",answer:" Event capturing is the reverse of event bubbling. This means that events starts from the window all the way to the element that triggered the event.\n\n"},{question:"Name the three Event Propagation phases.",answer:" 1 - capturing phase \u2014 event starts from window then goes down all the way to child elements until it reaches the target element. <br>\n              2 - target phase \u2014 event has reached the target element. <br>\n              3 - bubbling \u2014 event bubbles up from the target element and goes up all the way to the window."}];function N(){return Object(u.jsx)("ul",{children:S.map((function(e){return Object(u.jsx)(y,{question:e.question,answer:e.answer})}))})}var D=[{question:"What is Event Propagation? ?",answer:" An HTML event can be something the browser does, or something a user does."},{question:"List some examples of HTML events:",answer:"- An HTML web page has finished loading;<br>\n             - An HTML input field was changed; <br>\n             - An HTML button was clicked"},{question:"What is Event Listener(Handler)?",answer:' An event listener is a procedure in JavaScript that waits for an event to occur <br>\n               //.2.1\n                let button_c = document.querySelector("button");  <br>\n               //.2.2\n                 let eventHandler = () => {\n                 console.log("button clicked"); }; <br>\n                //.2.3\n                // button_c.addEventListener("click", eventHandler);'},{question:"Name Two type of events",answer:"  1.Browser Events; <br>\n               2.User Events; "},{question:"What the removeEventListener() does?",answer:"  Remove an event that has been attached with the addEventListener() method. "},{question:"Name some examples of JavaScript Events",answer:"  - change: An HTML element has been changed; <br>\n               - click: The user clicks an HTML element; <br>\n               - mouseover: The user moves the mouse over an HTML element or its children; <br>\n               - mouseenter: the user moves the mouse into an HTML element; <br>\n               - mousemove: The user moves the mouse inside an HTML element; <br>\n               - mouseout: The user moves the mouse away from an HTML element; <br>\n               - keydown: The user pushes a keyboard key; <br>\n               - load: The browser has finished loading the page; <br>\n               - submit: The user submits a form; <br>\n               - keyup: The user releases a key on the keyboard  "},{question:"What means Event Bubbling?",answer:"  Means when listener of an element listen the triggering of event, it will inform upper levels, if they have listener for the same event. "},{question:"What means  event bubbling phase? ",answer:" The bubbling phase, where the event bubbles up from the originating node to the parent element, grandparent, and all the way up to window."},{question:"What is Event Propagation? ",answer:"  Event propagation occurs when an event is fired on a DOM element. The event is also triggered by the parent elements."},{question:"What does the event.stopPropagation()? ",answer:"  The event.stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed."},{question:"What is the event capturing? ",answer:" Event capturing is the reverse of event bubbling. This means that events starts from the window all the way to the element that triggered the event.\n\n"},{question:"Name the three Event Propagation phases.",answer:" 1 - capturing phase \u2014 event starts from window then goes down all the way to child elements until it reaches the target element. <br>\n              2 - target phase \u2014 event has reached the target element. <br>\n              3 - bubbling \u2014 event bubbles up from the target element and goes up all the way to the window."}];function J(){return Object(u.jsx)("ul",{children:D.map((function(e){return Object(u.jsx)(y,{question:e.question,answer:e.answer})}))})}var P=function(e){var t=Object(l.f)(),n=t.path,s=t.url;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Browser Events"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"".concat(s,"/events"),children:"Events"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"".concat(s,"/addEventListener"),children:"AddEventListener"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"".concat(s,"/removeEventListener"),children:"RemoveEventListener"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"".concat(s,"/propagation"),children:"Propagation"})})]}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"".concat(n,"/events"),component:k}),Object(u.jsx)(l.a,{path:"".concat(n,"/addEventListener"),component:A}),Object(u.jsx)(l.a,{path:"".concat(n,"/removeEventListener"),component:N}),Object(u.jsx)(l.a,{path:"".concat(n,"/propagation"),component:J})]})]})};var I=function(){var e=Object(s.useState)("dom"),t=Object(i.a)(e,2);return t[0],t[1],Object(u.jsxs)(h.a,{children:[Object(u.jsxs)("ul",{className:"nav  nav-tabs",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(h.b,{exact:!0,className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(h.b,{className:"nav-link",to:"/dom",children:"DOM"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(h.b,{className:"nav-link",to:"/modules",children:"Modules"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(h.b,{className:"nav-link",to:"/promise",children:"Promise"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(h.b,{className:"nav-link",to:"/json",children:"JSON"})})]}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",component:b}),Object(u.jsx)(l.a,{path:"/dom",component:v}),Object(u.jsx)(l.a,{path:"/dom/introduction",component:L}),Object(u.jsx)(l.a,{path:"/dom/manipulating",component:O}),Object(u.jsx)(l.a,{path:"/dom/traversing",component:E}),Object(u.jsx)(l.a,{path:"/dom/browserEvents",component:P})]})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),B()}},[[39,1,2]]]);
//# sourceMappingURL=main.564e7824.chunk.js.map