import React from 'react';
// import Header from '../header/Header'
import Button from '../../Button';
import { Link } from "react-router-dom"
function SignUp(props) {
    return (

        <div className='flex items-center justify-center text-center'>
            <div className='w-96 '>
                <Link to="/" className="">
                    <h1 className="my-6 font-logo font-bold  text-3xl leading-normal ">sh<span className="inline-block text-purple-700 ">o</span>pr</h1>
                </Link>
                <div>
                    <h2 className='heading-2 m-0  leading-tight'>Create An Account</h2>
                    <span>
                        <p >
                            Already have a shopr account? &nbsp;
                            <Link to="/sign_in" className='inline-block underline text-purple-800 hover:opacity-90'>
                                Log in
                            </Link>
                        </p>
                    </span>
                </div>
                <div className=' py-6 flex justify-between  '>
                    <a href="" className='py-1 px-3 border-1 border-solid inline-block rounded-md'>
                        Google
                    </a>
                    <a href="" className='py-1 px-3 border-1 border-solid inline-block rounded-md'>
                        Google
                    </a>
                    <a href="" className='py-1 px-3 border-1 border-solid inline-block rounded-md'>
                        Google
                    </a>


                </div>
                <div className='my-3'>

                    {/* <p class=" relative after:absolute after:-z-20  after:h-1 after:top-1/2 transform after:-translate-y-1/2  before:h-full after:bg-red-400 after:left-1/2 after:-translate-x-1/2   before:absolute before:-z-10    before:block before:-left-2 before:-right-2 before:bg-white after:w-96 after:block  ">Or</p> */}
                    {/* <p class="inline-block relative after:absolute after:-z-20  after:h-1 after:top-1/2 transform after:-translate-y-1/2  before:h-full after:bg-rose-400 before:absolute before:-z-10    before:block before:-left-2 before:-right-2 before:bg-white after:w-screen after:block  after:left-1/2 after:-translate-x-1/2 ">Or</p>  */}
                    {/* <p className='relative after:absolute after:h-3 after:w-full after:bg-red-300 before:bg-yellow-300'>aslfkdasdfhh </p> */}
                    <p>Or</p>

                </div>

                <div>
                    <form action="">
                        <div className="flex justify-between gap-4 my-5">
                            <div className="relative ">

                                <input type="text" id="firstName" name="firstName" className="peer px-4 h-10 w-full border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 border-1 focus:shadow-input" placeholder="Emailsdafdfasd Address" />
                                <label for="firstName" className="bg-white leading-none text-sm left-0  text-gray-600 px-one absolute -top-2 peer-placeholder-shown:label-offset peer-placeholder-shown:left-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:px-2 peer-focus:left-4 peer-focus:text-purple-800 peer-focus:-top-2 transition-all peer-focus:pl-0 peer-focus:pr-one peer-focus:leading-none  peer-focus:bg-white">First Name</label>

                            </div>
                            <div className="relative ">

                                <input type="text" id="lastName" name="lastName" class="peer px-4 h-10 w-full border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 border-1 focus:shadow-input" placeholder="Emailsdafdfasd Address" />
                                <label for="lastName" class="bg-white leading-none text-sm left-0  text-gray-600 px-one absolute -top-2 peer-placeholder-shown:label-offset peer-placeholder-shown:left-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:px-2 peer-focus:left-4 peer-focus:text-purple-800 peer-focus:-top-2 transition-all peer-focus:pl-0 peer-focus:pr-one peer-focus:leading-none  peer-focus:bg-white">Last Name</label>

                            </div>
                        </div>
                        <div className="relative my-5">

                            <input type="text" id="email" name="email" className="peer px-4 h-10 w-full border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 border-1 focus:shadow-input" placeholder="Emailsdafdfasd Address" />
                            <label for="email" className="bg-white leading-none text-sm left-0  text-gray-600 px-one absolute -top-2 peer-placeholder-shown:label-offset peer-placeholder-shown:left-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:px-2 peer-focus:left-4 peer-focus:text-purple-800 peer-focus:-top-2 transition-all peer-focus:pl-0 peer-focus:pr-one peer-focus:leading-none  peer-focus:bg-white">Email Address</label>

                        </div>
                        <div className="relative mt-5 mb-4">

                            <input type="password" id="password" name="password" className="peer px-4 h-10 w-full border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 border-1 focus:shadow-input" placeholder="Emailsdafdfasd Address" />
                            <label for="password" className="bg-white leading-none text-sm left-0  text-gray-600 px-one absolute -top-2 peer-placeholder-shown:label-offset peer-placeholder-shown:left-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:px-2 peer-focus:left-4 peer-focus:text-purple-800 peer-focus:-top-2 transition-all peer-focus:pl-0 peer-focus:pr-one peer-focus:leading-none  peer-focus:bg-white">Password</label>

                        </div>
                        <Link to="/users/password/new" className='underline'>
                            <p className='text-right text-sm text-purple-800'>Forgot password?</p>
                        </Link>
                        <Button buttonFor="Sign up with Email." className="mt-3 bg-purple-800 text-white w-full py-1rm text-base" />
                    </form>
                </div>
            </div>
        </div>

    );
}

export default SignUp;