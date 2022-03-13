import React from 'react';

// import Image from "../../assets/images/female-male-potrait.jpg"
// import AccountSidebar from "./sub-components/AccountSidebar"
import AccountTemplate from "./sub-components/AccountTemplate"
import AccountSidebar from './sub-components/AccountSidebar';
import { FaTrashAlt } from "react-icons/fa"
function SavedItems(props) {
    return (
        <AccountTemplate>
            <AccountSidebar active="saved" />

            <section className='col-start-5 col-span-8 pr-9'>
                <p className='font-semibold text-lg -mt-8 mb-2'>Saved Items</p>
                <ul className='w-full'>
                    <li className='py-6 bg-opacity-5 bg-purple-400 w-full flex gap-7 border-t-1 border-purple-700 border-solid ' >
                        <div className='w-1/4 max-w-xs'>

                            <img className='w-full object-contain' src="https://res.cloudinary.com/abasscodes/image/upload/v1637916389/tiro-21-track-pants_s7fh2n.jpg" alt="" />
                        </div>
                        <div className='flex-grow pr-7 flex flex-col justify-between bg-green-500'>
                            <div className='flex justify-between items-baseline'>
                                <p>Tiro Tracks</p>
                                <FaTrashAlt />
                            </div>
                            <div className='-mt-14 text-sm'>
                                <p>Select a size:</p>
                                <div>

                                </div>
                            </div>
                            <div className='flex justify-between items-baseline   bg-custom-purple'>
                                <div>
                                    <button type='button'>-</button>
                                    <span>1</span>
                                    <button type='button'>+</button>
                                </div>
                                <button type='button'>Move to Cart</button>
                            </div>
                        </div>
                        {/* hgljkhkgjfjhklhgfdjh */}
                        {/* <Image/>  */}
                    </li>
                </ul>
            </section>
        </AccountTemplate>
    );
}

export default SavedItems;