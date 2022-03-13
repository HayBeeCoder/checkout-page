import React from 'react';

import AccountTemplate from "./sub-components/AccountTemplate"
import AccountSidebar from './sub-components/AccountSidebar';

const PaymentInfo = () => {
    return (
        <AccountTemplate>
        <AccountSidebar active="payment"/>
               
        <section className='col-start-5 col-span-8 pr-9'>
            <p className='font-semibold text-lg -mt-6 mb-1'>Payment Information</p>
            <ul className=''>
                <li>
                   payments actually
                    {/* <Image/> */}
                </li>
            </ul>
        </section>
    </AccountTemplate>
    );
};

export default PaymentInfo;