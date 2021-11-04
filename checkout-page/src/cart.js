import React from 'react';
import PageTemplate from './PageTemplate';
import Button from './Button';
import { Link } from 'react-router-dom';
function cart(props) {
    return (
        <div>
            <PageTemplate>
                <div className="text-center">
                    <Link to="/checkout/address">
                        <Button className="bg-blue-800 text-white my-4 py-4 px-16" buttonFor="Checkout" />
                    </Link>
                    <Button className="bg-blue-800 text-white my-4 py-4 px-16" buttonFor="Continue Shopping" />
                </div>
            </PageTemplate>
        </div>
    );
}

export default cart;