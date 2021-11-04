import React from 'react';
import Inputelement from './inputelement';
import Button from './Button';
import PageTemplate from './PageTemplate';
import CheckoutPageTemplate from './CheckoutPageTemplate'
import { Link } from "react-router-dom";

function review(props) {
    return (
        <PageTemplate>
            <CheckoutPageTemplate progressCount={4} >
                <div className="my-7">
                    <h2 className="text-2xl font-bold my-1">Review Details</h2>
                    <p className="text-xs mb-4"> * means Required </p>
                    <form action="">


                        <Link to="">
                            <Button className="bg-blue-800 text-white my-4 py-4 px-16" buttonFor="Submit" />
                        </Link>

                    </form>
                </div>


            </CheckoutPageTemplate>
        </PageTemplate>

    );
}

export default review;