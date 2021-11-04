import React from 'react';

function checkpoint({ state, name }) {

    const checkpoint_border_clr = (state == "active" ? " border-black" : " ");
    const inner_circle_bg = (state == "active" ? " bg-black" : " bg-gray-300");
    const label = (state == "active" ? " text-black" : " text-gray-300");
    return (
        <li className="inline-flex flex-col">
            <div className={"relative flex w-5 h-5 justify-center items-center rounded-full bg-gray-100 border-2 " + checkpoint_border_clr}>
                <p className={"absolute  top-6 text-sm" + label}>{name}</p>

                <div className={" block w-2 h-2 rounded-full " + inner_circle_bg}></div>
            </div>
        </li>
    );
}

export default checkpoint;