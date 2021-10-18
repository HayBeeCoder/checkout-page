import React from 'react';
import Navlink from './navlink';

function Nav(props) {
    return (
        <ul className="list-none flex flex-row gap-5">
            <Navlink href="#" link="Women's" />
            <Navlink href="#" link="Men's" />
            <Navlink href="#" link="Home" />
            <Navlink href="#" link="Travel" />
            <Navlink href="#" link="Beauty" />
            <Navlink href="#" link="Sale" />
        </ul>

    );
}

export default Nav;