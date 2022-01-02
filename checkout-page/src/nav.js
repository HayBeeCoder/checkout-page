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
            <Navlink href="beauty" link="Beauty" />
            <Navlink href="sale" link="Sale" />
            <Link to="/profile">
                {/* <FdCard></FaIdCard> */}
                <CgProfile className="text-2xl" />
            </Link>
            <li className=" relative ">

                <div className="absolute transform -translate-x-1/2 -translate-y-1/2  text-xs w-5 h-5 text-center rounded-full  bg-black text-white border-2 border-white  flex items-center justify-center">
                    <p className="text-cart inline-block p-2">12</p>
                </div>

                <Link to="/cart">
                    <FaShoppingCart className="text-2xl" />
                </Link>
            </li>
        </ul>

    );
}

export default Nav;