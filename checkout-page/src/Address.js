
import React from 'react';
import Inputelement from './inputelement';
import Button from './Button';
import PageTemplate from './PageTemplate';
import CheckoutPageTemplate from './CheckoutPageTemplate'
import { Link } from "react-router-dom";

const Address = () => {

    return (
        <PageTemplate>
            <CheckoutPageTemplate progressCount={1}>
                <div className="my-7">
                    <h2 className="text-2xl font-bold my-1">Address Details</h2>
                    <p className="text-xs mb-4"> * means Required </p>
                    <form action="">
                        <ul className="list-none grid grid-cols-12 gap-4">
                            <Inputelement className="col-start-1 col-span-6" label="First Name" important={true} />
                            <Inputelement className="col-start-7 col-span-6" label="Last Name" important={true} />
                            <Inputelement className="col-start-1 col-span-6" label="Mobile Phone Number" important={true} />
                            <Inputelement className="col-start-7 col-span-6" label="Additional Number" />

                            <div className="col-start-1 col-span-12">
                                <label htmlFor="address" className="custom-label">
                                    Address
                                </label>

                                <textarea rows="8" className="custom-input w-full textarea" id="address" placeholder="Street Name/Building/Apartment No" />
                            </div>

                            <Inputelement className="col-start-1 col-span-6" label="State" important={true} />

                            <Inputelement className="col-start-7 col-span-6" label="City" important={true} />
                            <Inputelement className="col-start-1 col-span-6" label="Postal Code" important={true} />

                        </ul>

                        <Link to="/checkout/delivery">
                            <Button className="bg-blue-800 text-white my-4 py-4 px-16" buttonFor="Continue" />
                        </Link>

                    </form>
                </div>


            </CheckoutPageTemplate>
        </PageTemplate>

    );
};

export default Address;