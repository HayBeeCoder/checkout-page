import React from 'react';
import Progress from './progress';
import Summary from './summary'

function CheckoutPageTemplate({ children, progressCount, checkpoint }) {
    return (
        <section className="grid grid-cols-12 min-h-full ">
            <main className=" col-start-1 col-span-8 h-full py-6 ">
                <div className="w-5/6 mx-auto max-w-xl">
                    <Progress count={progressCount} checkpoint={checkpoint} />
                    {children}
                </div>
            </main>
            <Summary className=" col-start-9 col-span-4" />
        </section>
    );
}

export default CheckoutPageTemplate;