import React from 'react';
import Nav from "./nav";
import Progress from "./progress";
import Summary from "./summary";

function Delivery(props) {
    return (
        // <div className="my-7">
        //     <h2 className="text-2xl font-bold my-1">Delivery Method</h2>



        <div>
            <section className="grid grid-cols-12 min-h-full ">
                <main className=" col-start-1 col-span-8 h-full py-6 ">
                    <div className="w-5/6 mx-auto max-w-xl">
                        <Progress />
                        {/* <Payment /> */}
                        {/* <Address /> */}
                        <Deliver />
                        <form action="">
                        <fieldset className="border-1 border-solid p-4 border-black">
                    <legend className="text-xs">How do you want your order delivered</legend>
                    <ul>
                        <li className="mb-3">
                            <input type="radio" name="delivery-method" id="door" className="inline-block" />
                            <label htmlFor="door" className="inline-block pl-4">Door Delivery</label>
                        </li>
                        <li className="mb-3">
                            <input type="radio" name="delivery-method" id="" />
                            <label htmlFor="" className="inline-block pl-4">Pickup Station </label>
                        </li>
                    </ul>
                </fieldset>
                <Button className="bg-blue-800 text-white my-4 py-4 px-16" buttonFor="Continue" />

                        </form>
                        {/* <Payment /> */}
                        {/* <Button className="bg-blue-800 text-white my-4 py-4 px-16" buttonFor="Review Order" /> */}
                    </div>
                </main>
                <Summary />

            </section>

        </div>
    );
}

export default Delivery;