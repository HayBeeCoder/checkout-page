import React from 'react';
import Inputelement from './inputelement';
import PageTemplate from './PageTemplate';
import Button from './Button';
import CheckoutPageTemplate from './CheckoutPageTemplate';
import { Link } from 'react-router-dom';
payment.propTypes = {

};

function payment(props) {
    return (
        <PageTemplate>
            <CheckoutPageTemplate progressCount={3} checkpoint="Payment">
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
                            <Link to="/checkout/review">
                                <Button className="bg-blue-800 text-white my-4 py-4 px-16" buttonFor="Continue" />
                            </Link>
                        </ul>
                    </form>
                </div>
            </CheckoutPageTemplate>
        </PageTemplate>
    );
}

export default payment;