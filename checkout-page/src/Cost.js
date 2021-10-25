import React from 'react';
// import PropTy

const Cost = ({ name, value }) => {
    return (
        <li className="fles justify-between">
            <p>{name}</p>
            <p>{'$' + value}</p>
        </li>
    );
};

// Cost.prototype = Proptype

export default Cost;