import React from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const NavIcons = () => {
    return (
        <div className=' flex gap-2 items-center'>
            <div className='relative'>

                <Link to="/account" className='relative p-2 rounded-md inline-block hover:bg-gray-200 hover:opacity-90'>
                    {/* <div className=""> */}

                    {/* <span className="absolute transform -translate-x-1/2 -translate-y-1/2  text-xs w-5 h-5 text-center rounded-full  bg-purple-800 text-white border-2 border-white  flex items-center justify-center">
                        <p className="text-cart inline-block p-2">12</p>
                    </div> */}


                    <FaUser className="text-xl  relative" />
                    <span className='absolute top-1 left-1 w-2 h-2 rounded bg-purple-800'></span>

                    {/* </div> */}
                </Link>
                {/* flex gap-3 flex-col justify-between items-stretch  */}
                <ul className='absolute left-8 transform -translate-x-full  bg-white p-4 w-52 shadow-shadow-1 rounded-sm invisible'>
                    <Link to="/account">

                        <li className=' py-3 px-6 pl-2  text-gray-400 hover:text-black'>My Account</li>
                    </Link>
                    <Link to="/account/saved-items">

                        <li className=' py-3 px-6 pl-2 text-gray-400 hover:text-black'>Saved Items</li>
                    </Link>
                    <Link to="/account">

                        <li className=' py-3 px-6 pl-2 text-gray-400 hover:text-black'>My Account</li>
                    </Link>
                    <Link to="/account">

                        <li className=' py-3 px-6 pl-2 text-gray-400 hover:text-black'>My Account</li>
                    </Link>
                    {/* <li>Saved Items</li>
                    <li>Shipping Info</li>
                    <li>Payment Info</li>
                    <li>Log out</li> */}
                </ul>
            </div>
            <Link to="/cart" className='relative inline-block hover:opacity-90 p-2'>


                <div className="absolute transform -translate-x-1/2 -translate-y-1/2  text-xs w-5 h-5 text-center rounded-full  bg-purple-800 text-white border-1 border-white  flex items-center justify-center"> 
                    <p className="text-cart inline-block p-2">12</p>
                </div>


                <FaShoppingCart className="text-xl " />

            </Link>
        </div>
    );
};

export default NavIcons;