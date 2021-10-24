import React from 'react';
import {Link} from "react-router-dom";

function Dom() {
    return (
        <>
            <ul className="list-group m-md-50">
                <li className="list-group-item"><Link to="/dom/introduction">Introduction</Link></li>
                <li className="list-group-item"><Link to="/dom/manipulating">Manipulating</Link></li>
                <li className="list-group-item"><Link to="/dom/traversing">Traversing</Link></li>
                <li className="list-group-item"><Link to="/dom/browserEvents">BrowserEvents</Link></li>
            </ul>
        </>
    );
}

export default Dom;