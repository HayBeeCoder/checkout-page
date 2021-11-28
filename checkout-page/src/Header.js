import React from 'react';
import Nav from './nav';
import { Link } from 'react-router-dom';

function Header({ landingpage }) {
    const className = "z-50 p-5 py-5 flex justify-between items-center" + (landingpage ? "bg-transparent absolute text-white" : "text-black border-b ");

    return (
        <header className={className}>
            {/* <div className="bg-red-700 absolute top-1/2 transform -translate-y-1/2 w-full h-1"></div> */}
            <Link to="/" className="self-">
                <h1 className="font-logo font-bold  text-7xl leading-normal ">sh<span className="inline-block text-purple-700 ">o</span>pr</h1>
            </Link>
            {!landingpage && <Nav />}

        </header>
    );
}

export default Header;