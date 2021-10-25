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
                    <Inputelement className="col-start-1 col-span-12" label="Cardholder Name" />
                    <Inputelement className="col-start-1 col-span-12" label="Card Number" />
                    <Inputelement className="col-start-1 col-span-4" label="Expiration">
                        <label htmlFor="expiration" className="custom-label">Expiration</label>
                        <ul className="inline-flex items-center">
                            <Inputelement className="w-24" />
                            <span className="w-14 text-center">/</span>
                            <input className="custom-input w-24" type="text" name="expiration" id="expiration-month" />

                        </ul>
                    </Inputelement>
                    <Inputelement className="col-start-7 col-span-6" label="CVV" />

                </ul>
            </form>
        </div>
    );
}

export default payment;