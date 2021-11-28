import React from 'react';
import Button from './Button';
import Inputelement from './inputelement';

function Subscription(props) {
    return (
        <div id="subscribe-collections" className="py-28">
            <h2 className="heading-2 my-0"><span className="text-purple-800" >Subscribe</span> To Our NewsLetter</h2>
            <p className="text-center"> Get daily updates on new products in store and everything fashion</p>
            <div className="py-8 flex flex-col items-stretch justify-between gap-4 w-3/6 max-w-3xl mx-auto">
                <Inputelement inputClassName="text-xl" placeholder="JohnDoe@gmail.com" />
                <Button className="w-full bg-purple-800 py-4 text-white text-xl" buttonFor="Subscribe" />
            </div>
        </div>
    );
}

export default Subscription;