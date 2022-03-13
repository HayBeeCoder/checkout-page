import React from 'react';
import AccountTemplate from "./sub-components/AccountTemplate"
import InputElement from '../../inputelement';
import Button from '../../Button';
import AccountSidebar from  "./sub-components/AccountSidebar"

const personalAccount = () => {
    return (
        <AccountTemplate>
            <AccountSidebar active="account"/>
               
              <section className='col-start-5 col-span-8 pr-9'>
                <p className='font-semibold text-lg -mt-6 mb-1'>Edit your personal information</p>
                    <ul className='flex flex-col gap-4'>
                        <InputElement label="First Name" important={true}/>
                        <InputElement label="Last Name" important={true}/>
                        <InputElement label="Email Address" important={true}/>
                        <InputElement label="Password" type='password' important={true}/>
 
                    </ul>
                        <Button buttonFor="Submit Details" className="my-10 text-center bg-purple-800 text-white w-full"/>
                </section>
        </AccountTemplate>
    );
};

export default personalAccount;