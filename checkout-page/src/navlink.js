import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';

function Navlink({ className, link, href }) {
    return (
        // <li >
        <NavLink to={`/${href}`} className="hover:text-purple-500 font-display " activeClassName='text-purple-700'>
            {/* <div> */}
            {className ? <Button buttonFor={link} className={" my-3 py-2 px-5 rounded-full " + className} /> : <li className="inline-block p-2 px-2 ">{link}</li>}

            {/* </div> */}
        </NavLink>
        // </li>
    );
}

export default Navlink;