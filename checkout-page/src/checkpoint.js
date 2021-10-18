import React from 'react';

function checkpoint({ name }) {
    return (
        <li className="inline-flex flex-col gap-5 items-center">
            <div className="flex w-5 h-5  justify-center items-center rounded-full border-black border-2">
                <div className=" block w-2 h-2  bg-black  rounded-full"></div>
            </div>
            <p className="text-gray-300">{name}</p>
        </li>
    );
}

export default checkpoint;