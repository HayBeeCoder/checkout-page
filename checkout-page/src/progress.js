import React from 'react';
import Checkpoint from './checkpoint';

function progress(props) {
    return (
        <div>
            <ul className="flex justify-between">
                {/* <div className=""></div> */}
                <Checkpoint name="Accont" />
                <Checkpoint name="Shipping" />
                <Checkpoint name="Payment" />
                <Checkpoint name="Review" />
            </ul>
        </div>
    );
}

export default progress;