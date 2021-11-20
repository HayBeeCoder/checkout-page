import React from 'react';
import Nav from './nav';
import { Link } from 'react-router-dom';

function Header({ landingpage }) {
    const className = "z-50 p-7 py-5   flex justify-between items-center " + (landingpage ? "bg-transparent absolute" : " border-b");

    return (
        <header className={className}>
            <Link to="/">
                <h1 className="font-logo font-bold  text-4xl">sshopr</h1>
            </Link>
            {!landingpage && <Nav />}

        </header>
    );
}

export default Header;