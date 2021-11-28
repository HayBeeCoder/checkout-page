import React from 'react';
import { Link } from 'react-router-dom';
function FooterIcon({ children }) {
    return (

        <Link to="/" className="p-3 rounded-full bg-purple-800">
            {children}
        </Link>

    );
}

export default FooterIcon;