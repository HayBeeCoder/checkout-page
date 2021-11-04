import React from 'react';
import Nav from './nav';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="App-header p-7 py-5 border-b  flex justify-between class items-center">
            <Link to="/">
                <h1 className="font-display font-bold  text-4xl">LOGO</h1>
            </Link>
            <Nav />

        </header>
    );
}

export default Header;