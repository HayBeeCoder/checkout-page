import React from 'react';

import AccountTemplate from "./sub-components/AccountTemplate"
import AccountSidebar from './sub-components/AccountSidebar';

const ShippingInfo = () => {
    return (
        <div>
            <AccountTemplate>
                <AccountSidebar active="shipping" />

                <section className='col-start-5 col-span-8 pr-9'>
                    <p className='font-semibold text-lg -mt-6 mb-1'>Shipping Information</p>
                    <ul className=''>
                        <li>
                            shipping actually
                            {/* <Image/> */}
                        </li>
                    </ul>
                </section>
            </AccountTemplate>
        </div>
    );
};

export default ShippingInfo;