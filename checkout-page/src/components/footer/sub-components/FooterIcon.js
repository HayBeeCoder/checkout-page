import React from 'react';
import { Link } from 'react-router-dom';
function FooterIcon({ children }) {
    return (

        <Link to="/" className="p-3 rounded-full bg-purple-800 transit transform hover:scale-105 hover:transit hover:-translate-y-1/4 hover:rou">
            {children}
        </Link>

    );
}

export default FooterIcon;