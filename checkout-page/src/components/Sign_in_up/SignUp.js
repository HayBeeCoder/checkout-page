import React from 'react';
import { useState } from 'react';
import Button from '../../Button';
import { Link } from "react-router-dom"

const validateForm = error => {
    let valid = true
    Object.values(error).forEach(err => err.length > 0 && (valid = false))
    return valid
}


function SignUp(props) {
    const [input, setInput] = useState({ first_name: null, last_name: null, email: null, password: null })
    const [error, setError] = useState({ first_name: '', last_name: '', email: '', password: '' })

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const handleOnChange = name => event => {
        // { name , value } can also be used in getting the name and  value of the form element
        event.preventDefault()
        let { value } = event.target
        let err = error
        value = value.trim();

        //find a more optimized alternative for switch in this context
        switch (name) {
            case "first_name":
                err[name] = value && value.length > 1 ? ""
                    : "First name can't be empty!";
                break;
            case "last_name":
                err[name] = value && value.length > 1 ? ""
                    : "Last name can't be empty";
                break;
            case "email":
                err[name] = validEmailRegex.test(value) ? ""
                    : "Enter a valid email!";
                break;
            case "password":
                err[name] = value.length > 8 ? ""
                    : "Password must be at least 8 characters long with no space"
                break;
            default:
                break;
        }
        setInput({ ...input, [name]: value })
        setError(err)
    }

    // console.log(error, input)



    const handleSubmit = (event) => {
        event.preventDefault()
        if (!validateForm(error)) {
            console.log(error)
            console.log("Form is Invalid")
        } else {

            // console.log("Form is Valid!")
            const { first_name, last_name, email, password } = input;
            const user = {
                name: `${first_name + " " + last_name}`,
                email,
                password
            }
            console.log(user)
        }

    }


    return (

        <div className='flex items-center justify-center text-center'>
            <div className='w-96 '>
                <Link to="/" className="">
                    <h1 className="my-6 font-logo font-bold  text-3xl leading-normal ">sh<span className="inline-block text-purple-700 ">o</span>pr</h1>
                </Link>
                <div>
                    <h2 className=' sm:text-xl heading-2 m-0  leading-tight '>
                        <span className='text-purple-800'>
                            Create
                        </span>
                             &nbsp;
                        An Account</h2>
                    <span>
                        <p >
                            Already registered ? &nbsp;
                            <Link to="/sign_in" className='inline-block border-b-solid border-b-purple-800 border-b-1 text-purple-800 hover:opacity-90 hover:border-0'>
                                Log In
                            </Link>
                        </p>
                    </span>
                </div>

                {/* =====================
            Later on , Implement a third party sign up
            ===================== */}


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


                <div className='my-3'>

                   <p>Or</p>

                </div>
                </div> */}

                <div className='px-7'>
                    {/* Clear all the shitty placeholders you've got here Man! ;( */}
                    <form onSubmit={handleSubmit}>
                        <div className="sm:flex-col flex justify-between gap-5 my-5">
                            <div className="relative ">

                                <input type="text" id="firstName" name="firstName" className="peer px-4 h-10 w-full border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 border-1 focus:shadow-input" placeholder="Emailsdafdfasd Address" onChange={handleOnChange("first_name")} />
                                <label htmlFor="firstName" className="bg-white leading-none text-sm left-0  text-gray-600 px-one absolute -top-2 peer-placeholder-shown:label-offset peer-placeholder-shown:left-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:px-2 peer-focus:left-4 peer-focus:text-purple-800 peer-focus:-top-2 transition-all peer-focus:pl-0 peer-focus:pr-one peer-focus:leading-none  peer-focus:bg-white">First Name</label>

                            </div>
                            <div className="relative ">

                                <input type="text" id="lastName" name="lastName" className="peer px-4 h-10 w-full border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 border-1 focus:shadow-input" placeholder="Emailsdafdfasd Address" onChange={handleOnChange("last_name")} />
                                <label htmlFor="lastName" className="bg-white leading-none text-sm left-0  text-gray-600 px-one absolute -top-2 peer-placeholder-shown:label-offset peer-placeholder-shown:left-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:px-2 peer-focus:left-4 peer-focus:text-purple-800 peer-focus:-top-2 transition-all peer-focus:pl-0 peer-focus:pr-one peer-focus:leading-none  peer-focus:bg-white">Last Name</label>

                            </div>
                        </div>
                        <div className="relative my-5">

                            <input type="text" id="email" name="email" className="peer px-4 h-10 w-full border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 border-1 focus:shadow-input" placeholder="Emailsdafdfasd Address" onChange={handleOnChange("email")} />
                            <label htmlFor="email" className="bg-white leading-none text-sm left-0  text-gray-600 px-one absolute -top-2 peer-placeholder-shown:label-offset peer-placeholder-shown:left-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:px-2 peer-focus:left-4 peer-focus:text-purple-800 peer-focus:-top-2 transition-all peer-focus:pl-0 peer-focus:pr-one peer-focus:leading-none  peer-focus:bg-white">Email Address</label>

                        </div>
                        <div className="relative mt-5 mb-4">

                            <input type="password" id="password" name="password" className="peer px-4 h-10 w-full border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 border-1 focus:shadow-input" placeholder="Emailsdafdfasd Address" onChange={handleOnChange("password")} />
                            <label htmlFor="password" className="bg-white leading-none text-sm left-0  text-gray-600 px-one absolute -top-2 peer-placeholder-shown:label-offset peer-placeholder-shown:left-4 peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:px-2 peer-focus:left-4 peer-focus:text-purple-800 peer-focus:-top-2 transition-all peer-focus:pl-0 peer-focus:pr-one peer-focus:leading-none  peer-focus:bg-white">Password</label>

                        </div>
                        <p className='text-right'>
{/* underline-1 is a custom class  */}
                        <Link to="/users/password/new" className='text-sm text-purple-800  hover:border-0 border-b-solid border-b-purple-800 border-b-2'>
                            Forgot password?
                        </Link>
                        </p>
                        {/* py-1rm is a custom class in index.css  */}
                        <Button buttonFor="Sign up with Email." className="mt-3 bg-purple-800 text-white w-full py-1rm text-base" />
                    </form>
                </div>
            </div>
        </div>

    );
}


export default SignUp;