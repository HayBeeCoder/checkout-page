import React from 'react';

function Navlink({ link, href }) {
    return (
        <li >
            <a href={href} className="inline-block p-2 px-2 ">{link}</a>
        </li>
    );
}

export default Navlink;