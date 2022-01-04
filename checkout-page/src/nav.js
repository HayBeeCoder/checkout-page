import React from 'react';
import Navlink from './navlink';
import { FaIdCard, FaShoppingCart, ShoppingCart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'
import { Link } from "react-router-dom";
function Nav() {


    return (
        <ul className="list-none flex flex-row gap-5 items-center">

            <Navlink href="collections/women" link="Women's" />
            <Navlink href="collections/men" link="Men's" />
            <Navlink href="collections/children" link="Children" />
            <Navlink href="about" link="About" />
            {/* <Navlink href="beauty" link="Beauty" /> */}
            {/* <Navlink href="sale" link="Sale" /> */}
            <Navlink href="sign_in" link="Log In " className="bg-white text-purple-800 border-purple-800 border-1 hover:bg-gray-50" />
            <Navlink href="sign_up" link="Sign Up " className="bg-purple-800 text-white" />
            {/* <Link to="/profile">
                 <CgProfile className="text-2xl" />
            </Link> */}
            <Link to="/cart" className='hover:opacity-90'>
                <li className=" relative ">

                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2  text-xs w-5 h-5 text-center rounded-full  bg-purple-800 text-white border-2 border-white  flex items-center justify-center">
                        <p className="text-cart inline-block p-2">12</p>
                    </div>


                    <FaShoppingCart className="text-2xl text-purple-800" />
                </li>
            </Link>
        </ul>

    );
}

export default Nav;