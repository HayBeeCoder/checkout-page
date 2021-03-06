import React from 'react';
// import Header from '../header/Header'
import Button from '../../Button';
import { Link } from "react-router-dom"
// import 
import { useState } from 'react';


function SignIn(props) {

    const [inputs, setInputs] = useState({})
    const handleInput = (e) => {
        const { name, value } = e.target;
        // console.log(name,value)
        setInputs({...inputs, [name]: value})

        console.log(inputs)
    }


    // const onSubmit = () => { 
    //         const {email,password} = inputs
    //         if(email && password){
    //         }
    // }


    return (

        <div className='flex items-center justify-center text-center'>
            <div className='w-96 '>
                <Link to="/" className="">
                    <h1 className="my-6 font-logo font-bold  text-3xl leading-normal ">sh<span className="inline-block text-purple-700 ">o</span>pr</h1>
                </Link>
                <div>
                    <h2 className='heading-2 m-0  leading-tight'>Welcome Back!</h2>
                    <span>
                        <p >
                            Already have a shopr account? &nbsp;
                            <Link to="/sign_up" className='inline-block underline text-purple-800 hover:opacity-90'>
                                Sign Up
                            </Link>
                        </p>
                    </span>
                </div>
                {/* <div className=' py-6 flex justify-between  '>
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
                <div className='my-3 flex gap-1 items-center justify-between'>

                      <div className='h-one flex-grow  bg-gray-200'></div>
                    <p>Or</p>
                    <div className='h-one flex-grow bg-gray-200'></div>

                </div> */}

                <div className='px-7'>
                    <form action="POST">

                        <div className="relative my-5">

                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="peer px-4 h-10 w-full border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 border-1 focus:shadow-input" placeholder="Emailsdafdfasd Address"
                                onChange={e => handleInput(e)} />
                            <label htmlFor="email" className="bg-white leading-none text-sm left-0  text-gray-600 px-one absolute -top-2 peer-placeholder-shown:label-offset peer-placeholder-shown:left-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:px-2 peer-focus:left-4 peer-focus:text-purple-800 peer-focus:-top-2 transition-all peer-focus:pl-0 peer-focus:pr-one peer-focus:leading-none  peer-focus:bg-white">Email Address</label>

                        </div>
                        <div className="relative mt-5 mb-4">

                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="peer px-4 h-10 w-full border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 border-1 focus:shadow-input"
                                placeholder="Emailsdafdfasd Address"
                                onChange={e => handleInput(e)} />
                            <label htmlFor="password" className="bg-white leading-none text-sm left-0  text-gray-600 px-one absolute -top-2 peer-placeholder-shown:label-offset peer-placeholder-shown:left-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:px-2 peer-focus:left-4 peer-focus:text-purple-800 peer-focus:-top-2 transition-all peer-focus:pl-0 peer-focus:pr-one peer-focus:leading-none  peer-focus:bg-white">Password</label>

                        </div>
                        <Link to="/users/password/new" className='underline'>
                            <p className='text-right text-sm text-purple-800'>Forgot password?</p>
                        </Link>
                        <Button buttonFor="Log in with Email." className="mt-3 bg-purple-800 text-white w-full py-1rm text-base"  />
                    </form>
                </div>
            </div>
        </div>

    );
}

export default SignIn;