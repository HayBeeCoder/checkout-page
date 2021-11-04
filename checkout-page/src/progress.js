import React from 'react';
import Checkpoint from './checkpoint';

function progress({ count }) {
    const checkpoints = ["Address", "Delivery", "Payment", "Review"]
    return (
        // <div>
        <div className="flex justify-between items-center mb-14">
            {
                checkpoints.map((checkpoint, value) => {
                    if (value < count) {
                        if (value == 0) return <Checkpoint name={checkpoint} state="active" />
                        else return (<div className="flex justify-start items-center flex-grow">
                            <div className="h-1 bg-black flex-grow" ></div>
                            <Checkpoint name={checkpoint} state="active" />
                        </div>)

                    }

                    return (<div className="flex justify-start items-center flex-grow">

                        <div className="h-1 bg-gray-200 flex-grow"></div>
                        <Checkpoint name={checkpoint} />
                    </div>)
                })
            }
            {/* <div className="flex justify-start items-center flex-grow">
                <Checkpoint name="Address" position="first" state="active" />
                <div className="h-1 bg-gray-200 flex-grow" ></div>
            </div> */}
            {/* <div className="flex justify-start items-center flex-grow">

                <Checkpoint name="Delivery" />
                <div className="h-1 bg-gray-200 flex-grow"></div>
            </div>
            <div className="flex justify-start items-center flex-grow">

                <Checkpoint name="Payment" />
                <div className="h-1 bg-gray-200 flex-grow"></div>
            </div> */}
            {/* <Checkpoint name="Review" /> */}
            {/* </ul> */}
        </div>
    );
}

export default progress;