import React from 'react';
import {NavLink} from "react-router-dom"

const AccountSidebar = ({active}) => {
    return (
        <section className='col-start-1 col-span-4 text-center flex items-start justify-end'>

                    <ul>
                        {/* still need to resolve issue of all Navlinks here being active , actually used a hack(AND operator in activeClassName) */}
                        <NavLink to="/account"className='hover:tex hover:font-semibold  text-left'  activeClassName={active == "account" &&'font-semibold text-purple-800'}>
                            <li className='text-left py-2 pl-4 pr-24 '>
                                Account
                            </li>
                        </NavLink>
                        <NavLink to="/account/saved-items" className='hover:text-black hover:font-semibold  text-left' activeClassName={active == "saved" && 'font-semibold text-purple-800'}>
                            <li className='text-left py-2 pl-4 pr-24 '>
                                Saved Items
                            </li>
                        </NavLink>
                        <NavLink to="/account/payment-info" className='hover:text-black hover:font-semibold  text-left'  activeClassName={active == "payment" && 'font-semibold text-purple-800'}>
                            <li className='text-left py-2 pl-4 pr-24 '>
                                Payment Info
                            </li>
                        </NavLink>
                        <NavLink to="/account/shipping-info" className='hover:text-black hover:font-semibold  text-left'  activeClassName={active == "shipping" && 'font-semibold text-purple-800'}>
                            <li className='text-left py-2 pl-4 pr-24 '>
                                Shipping Info
                            </li>
                        </NavLink>
                        <NavLink to="/account/shopping-info" className='hover:text-black hover:font-semibold  text-left'  activeClassName='font-semibold text-purple-800'>
                            <li className='text-left py-2 pl-4 pr-24 '>
                                Logout
                            </li>
                        </NavLink>


                    </ul>

                </section>
    );
};

export default AccountSidebar;