import React from 'react';
import { Link } from 'react-router-dom';

function Navlink({ link, href }) {
    return (
        // <li >
        <Link to={`/collections/${href}`}>
            <li className="inline-block p-2 px-2 ">{link}</li>
        </Link>
        // </li>
    );
}

export default Navlink;