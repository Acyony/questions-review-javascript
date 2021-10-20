import React, {} from 'react';
import {Link, Switch, Route} from "react-router-dom";
import {useRouteMatch} from "react-router";
import Events from "./Events";
import AddEventListener from "./AddEventListener";
import RemoveEventListener from "./RemoveEventListener";
import Propagation from "./Propagation";

function UserBrowserEvents(props) {
    const {path, url} = useRouteMatch()
    return (
        <>
            <h1>Browser Events</h1>
            <ul>
                <li>
                    <Link to={`${url}/events`}>Events</Link>
                </li>
                <li>
                    <Link to={`${url}/addEventListener`}>AddEventListener</Link>
                </li>
                <li>
                    <Link to={`${url}/removeEventListener`}>RemoveEventListener</Link>
                </li>
                <li>
                    <Link to={`${url}/propagation`}>Propagation</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/events`} component={Events}/>
                <Route path={`${path}/addEventListener`} component={AddEventListener}/>
                <Route path={`${path}/removeEventListener`} component={RemoveEventListener}/>
                <Route path={`${path}/propagation`} component={Propagation}/>
            </Switch>
        </>
    );
}

export default UserBrowserEvents;