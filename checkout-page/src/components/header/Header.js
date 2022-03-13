import React from 'react';
import Nav from '../../nav';
import { Link } from 'react-router-dom';
import NavIcons from '../../components/nav/nav_icons';


function Header({ landingpage }) {
    const className = "z-50 p-5 py-5 flex justify-between items-center" + (landingpage ? "bg-transparent absolute text-white" : "text-black border-b relative");

    return (
        <header className={className}>
            {/* <div className="bg-red-700 absolute top-1/2 transform -translate-y-1/2 w-full h-1"></div> */}
            {!landingpage && <Nav />}
            <Link to="/" className={landingpage ? "" : "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                <h1 className="font-semibold  text-3xl leading-normal uppercase">sh<span className="inline-block text-purple-700 ">o</span>pr</h1>
            </Link>
            {!landingpage &&  <NavIcons />}
           
        </header>
    );
}

export default Header;