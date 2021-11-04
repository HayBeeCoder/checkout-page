import React from 'react';
import PageTemplate from './PageTemplate';
import Button from './Button';
import CheckoutPageTemplate from './CheckoutPageTemplate'
import { Link } from 'react-router-dom';
function Deliver(props) {
    return (
        <PageTemplate>
            <CheckoutPageTemplate progressCount={2} checkpoint="Delivery">

                <div className="my-7">
                    <h2 className="text-2xl font-bold my-3">Delivery Method</h2>

                    <form action="">
                        <fieldset className="border-1 border-solid p-4 border-black">
                            <legend className="text-xs">How do you want your order delivered</legend>
                            <ul>
                                <li className="mb-3 flex items-center gap-2">
                                    <div className="border-blue-800 relative flex w-4 h-4 justify-center items-center rounded-full  border-2 " >
                                        <div className="block w-2 h-2 rounded-full bg-blue-800" ></div>
                                    </div>
                                    <label htmlFor="door" className="inline-block">Door Delivery</label>
                                    <input type="radio" name="delivery-method" id="door" className="m-0 inline-block appearance-none" />

                                </li>
                                <li className="mb-3 flex items-center gap-2">
                                    <div className="border-blue-800 relative flex w-4 h-4 justify-center items-center rounded-full  border-2 " >
                                        <div className="block w-2 h-2 rounded-full bg-blue-800" ></div>
                                    </div>
                                    <label htmlFor="station" className="inline-block">Pickup Station </label>
                                    <input type="radio" name="delivery-method" id="station" className="m-0 inline-block appearance-none" />

                                </li>

                            </ul>
                        </fieldset>
                        <Link to="/checkout/payment">
                            <Button className="bg-blue-800 text-white my-4 py-4 px-16" buttonFor="Continue" />
                        </Link>
                    </form>
                </div>
            </CheckoutPageTemplate>
        </PageTemplate>
    );
}

export default Deliver;