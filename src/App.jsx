import "./App.css";
import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "./Components/Content/Home";
import Dom from "./Components/Content/DOM/DOM";
import DOMManipulating from "./Components/Content/DOM/ManiputatingDOMQuestions";
import DOMIntroduction from "./Components/Content/DOM/IntroductionDOMQuestions";
import TraversingDOMQuestions from "./Components/Content/DOM/TraversingDOMQuestions";
import BrowserEvents from "./Components/Content/DOM/UserBrowserEvents";


function App() {
    const [selectedTab, setSelectedTab] = useState("dom");
    const selectTopic = function (e) {
        setSelectedTab(e.target.name);
    };

    return (
        <Router>
            <ul className="nav  nav-tabs">
                <li className="nav-item">
                    <Link exact className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dom">DOM</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/modules">Modules</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/promise">Promise</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/json">JSON</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/"  component={Home}/>
                <Route path="/dom"  component={Dom}/>
                <Route path="/dom/introduction" component={DOMIntroduction}/>
                <Route path="/dom/manipulating" component={DOMManipulating}/>
                <Route path="/dom/traversing" component={TraversingDOMQuestions}/>
                <Route path="/dom/browserEvents" component={BrowserEvents}/>




            </Switch>

        </Router>
    );
}

export default App;
