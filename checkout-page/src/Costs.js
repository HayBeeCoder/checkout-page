import React from 'react';
import Cost from './Cost'
const Costs = () => {
    return (
        <ul>
            <Cost name="Subtotal" value="1.00" />
            <Cost name="Subtotal" value="1.00" />
            <Cost name="Subtotal" value="1.00" />
            <Cost name="Total" value="3.00" />
        </ul>
    );
};

export default Costs;