import "./App.css";
import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "./Components/Content/Home";
import Dom from "./Components/Content/DOM/DOM";
import DOMManipulating from "./Components/Content/DOM/ManiputatingDOMQuestions";
import DOMIntroduction from "./Components/Content/DOM/IntroductionDOMQuestions";
import TraversingDOMQuestions from "./Components/Content/DOM/TraversingDOMQuestions";
import BrowserEvents from "./Components/Content/DOM/UserBrowserEvents";
import ReactQuestions from "./Components/Content/DOM/ReactQuestions";
// import {useRouteMatch} from "react-router";
// import {useLocation} from "react-router-dom";


function App() {
    const [selectedTab, setSelectedTab] = useState("dom");
    const selectTopic = function (e) {
        setSelectedTab(e.target.name);
    };

    return (

        <>
            <ul className="nav  nav-tabs">
                <li className="nav-item">
                    <Link exact className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dom">DOM</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/react">React</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/promise">Promise</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/json">JSON</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/home" exact component={Home}/>
                <Route path="/dom" exact component={Dom}/>
                <Route path="/dom/introduction" component={DOMIntroduction}/>
                <Route path="/dom/manipulating" component={DOMManipulating}/>
                <Route path="/dom/traversing" component={TraversingDOMQuestions}/>
                <Route path="/dom/browserEvents" component={BrowserEvents}/>
                <Route path="/react" component={ReactQuestions}/>

                <Route path="*" component={Home}/>
            </Switch>

        </>
    );
}

export default App;
