import Costs from "./Costs";
import Coupon from "./Coupon";
import React from 'react';
import Summarycard from './summarycard';
function summary(props) {
    return (
        <aside className="grid grid-rows-6  font-medium border-l col-start-9 col-span-4 h-screen  p-2">
            <div className=" row-start-1 row-span-3 overflow-y-scroll scroll-w-2" >
                <h2 className="leading-loose font-display text-xl mb-3 uppercase font-semibold" >Order Summary</h2>
                <div className="flex flex-col gap-3">
                    <Summarycard />
                    <Summarycard />
                    <Summarycard />
                    {/* <Summarycard /> */}
                    <Summarycard />
                </div>
            </div>
            <div className="row-start-4 row-span-1 flex items-center border-t-1 border-b-1 ">
                <Coupon />
            </div>
            <div className="row-start-5 row-span-2">
                <Costs />
            </div>

        </aside >
    );
}

export default summary;