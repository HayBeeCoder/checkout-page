import React from 'react';
import Navlink from './navlink';
import { CgProfile } from 'react-icons/cg'
import { Link } from "react-router-dom";
function Nav() {


    return (
        <ul className="list-none flex flex-row gap-5 items-center">

            <Navlink href="collections/women" link="Women's" />
            <Navlink href="collections/men" link="Men's" />
            <Navlink href="collections/children" link="Children" />
            {/* <Navlink href="about" link="About" /> */}
            {/* love the ui of these sign in and sign up buttons */}

            {/* <Navlink href="sign_in" link="Log In " className="bg-white text-purple-800 border-purple-800 border-1 hover:bg-gray-50" /> */}
            {/* <Navlink href="sign_up" link="Sign Up " className="bg-purple-800 text-white" /> */}
            {/* <Link to="/profile">
                 <CgProfile className="text-2xl" />
            </Link> */}
       
        </ul>

    );
}

export default Nav;