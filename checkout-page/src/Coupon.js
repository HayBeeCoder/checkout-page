import React from 'react';
import Inputelement from './inputelement';
import Button from './Button'

function Coupon({ onCouponInput = f => f }) {
    const submit = e => {
        e.preventDefault()
    }
    return (
        <form onSubmit={submit} className="flex-grow">
            <p className="text-sm mb-2">Gift Coupon</p>
            <div className="flex gap-2 items-stretch ">
                <Inputelement className=" flex-grow" label="" />
                <Button className="h-full self-stretch bg-transparent border-1 border-blue-800 text-blue-800 p-0" buttonFor="Apply"></Button>
            </div>
        </form>
    );
}

export default Coupon;