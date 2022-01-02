import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navlink({ link, href }) {
    return (
        // <li >
        <NavLink to={`/${href}`} className="hover:text-purple-500 " activeClassName='text-purple-700'>
            <li className="inline-block p-2 px-2 ">{link}</li>
        </NavLink>
        // </li>
    );
}

export default Navlink;