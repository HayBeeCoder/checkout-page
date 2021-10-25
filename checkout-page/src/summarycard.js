import React from 'react';

function summarycard(props) {
    return (
        <div className=" bg-white  flex  gap-2 items-start pr-2">
            <div className="flex-grow flex-shrink-0 w-24 h-24 bg-gray-300"></div>
            <div className="flex-shrink flex flex-col justify-between self-stretch">
                <p className="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex items-center">
                    <button className="w-7 h-7 leading-none bg-gray-100 rounded-md ">
                        <span className="inline-block transform-gpu scale-x-150 ">
                            -
                        </span>
                    </button>

                    <span className="p-3 inline-block leading-none">
                        1
                    </span>
                    <button className="w-7 h-7 leading-none bg-gray-100 rounded-md ">
                        <span className="inline-block transform-gpu scale-110 ">
                            +
                        </span>
                    </button>
                    <span className="flex gap-2 pl-2 items-center">
                        <p className="text-xs align-middle">x</p>
                        <p className="font-semibold text-base">$45.99</p>
                    </span>
                </div>

            </div>
            <span className="flex-grow flex-shrink-0 inline-block w-7 h-7 bg-gray-600"></span>

        </div>
    );
}

export default summarycard;

