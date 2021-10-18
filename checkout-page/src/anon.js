import React from 'react';
import PropTypes from 'prop-types';
import Inputelement from './inputelement';

payment.propTypes = {

};

function payment(props) {
    return (
        <div className="my-7">
            <h2 className="text-2xl font-bold my-3">Payment Details</h2>
            <form action="">
                <ul className="list-none grid grid-cols-12 gap-7">
                    <Inputelement col="col-start-1 col-span-12" label="Card Holder" />
                    <Inputelement col="col-start-1 col-span-12" label="Card Number" />
                    <Inputelement col="col-start-1 col-span-4" label="Expiration">
                        <label htmlFor="expiration" className="custom-label">Expiration</label>
                        <div className="inline-flex items-center">
                            <input className="w-24 custom-input" type="text" name="expiration" id="expiration-day" />
                            <span className="w-14 text-center">/</span>
                            <input className="w-24 custom-input" type="text" name="expiration" id="expiration-month" />

                        </div>
                    </Inputelement>
                    <Inputelement col="col-start-7 col-span-6" label="CVV" />
                    {/* <li className="col-start-1 col-span-12">

                        <label htmlFor="cardnumber">Card Number</label>
                        <input className="block w-full" type="text" name="cardnumber" id="cardnumber" />
                    </li> */}
                    {/* <li className="col-start-1 col-span-4">

                        <label htmlFor="expiration">Expiration</label>
                        <div className="inline-flex">
                            <input className="w-24" type="text" name="expiration" id="expiration-day" />
                            <span className="w-14 text-center">/</span>
                            <input className="w-24" type="text" name="expiration" id="expiration-month" />

                        </div>
                    </li> */}
                    {/* <li className="col-start-7 col-span-6">

                        <label htmlFor="cvv">CVV</label>
                        <input className="block" type="text" name="cvv" id="cvv" />
                    </li> */}
                </ul>
            </form>
        </div>
    );
}

export default payment;