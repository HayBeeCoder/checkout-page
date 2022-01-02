import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterLink({ link, href }) {
    return (
        // <li >
        // <NavLink to={`/collections/${href}`}>
        <NavLink to={`${href}`} className="hover:text-purple-500 py-2 font-normal space-x-5" activeClassName="text-purple-800">
            <li className="">{link}</li>
        </NavLink>
        // </li>
    );
}

export default FooterLink;