import React from 'react';
import Navlink from './navlink';
import { FaShoppingCart, ShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
function Nav(props) {
    return (
        <ul className="list-none flex flex-row gap-5 items-center">
            <Navlink href="#" link="Women's" />
            <Navlink href="#" link="Men's" />
            <Navlink href="#" link="Home" />
            <Navlink href="#" link="Travel" />
            <Navlink href="#" link="Beauty" />
            <Navlink href="#" link="Sale" />
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