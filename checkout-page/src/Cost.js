import React from 'react';
// import PropTy

const Cost = ({ name, value }) => {

    const className = (name.toLowerCase() == "total" && "font-extrabold my-2 text-xl ") || ''
    name = name.slice(0, 1).toUpperCase() + name.slice(1);
    console.log(name)
    return (
        <li className="w-full flex gap-10 my-1">
            <p className={className}>{name}</p>
            <p className={className}>{'$' + value}</p>
        </li>
    );
};

// Cost.prototype = Proptype

export default Cost;