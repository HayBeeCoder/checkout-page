import { categories } from '../../../models/data'
import Button from '../../../Button';
import React from 'react';
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa"

function Collections(props) {
  
    return (
//smooth for smooth scrolling
        <div smooth="true" id="section-collections" className="py-28 px-20">
            <h2 className="heading-2">Our  <span className="text-purple-700">Collections</span> </h2>
            <ul className="flex justify-between flex-grow gap-20">
                {categories.map((category, index) => (
                    <li className="w-2/6 " key={index}>
                        <div className="w-full relative rounded-xl overflow-hidden ">
                            <img src={category.img} alt="" className="inline-block object-contain " />
                        {/* <div className="h-96 w-full relative bg-gray-700 overflow-hidden">
                            <div className={"absolute z-20  flex justify-center flex-col gap-7 items-center h-full bg-purple-700 " + specificClass[index].absolute}>
                                <h3 className="stroke font-display text-5xl font-bold uppercase">{category.category}</h3>
                                
                            </div> */}

                        </div>
                        <p className='uppercase text-sm mt-2 mb-4 font-light'>{category.category + "'s"}</p>
                            <Link to={"/collections/" + category.category}>
                                    <Button className="text-base bg-purple-800 text-white px-8" buttonFor="shop" />

                                </Link>
                    </li>
                ))}

                {/* <li className="col-start-1 col-span-6">
                    <div className="h-96 w-full relative bg-gray-700 overflow-hidden">
                        <div className="absolute z-20 right-0 left-1/2 flex justify-center items-center  h-full bg-purple-700">
                            <h3 className="stroke font-display text-5xl font-bold">WOMEN</h3>

                        </div>
                        <img src={womenCollection} alt="" className="inline-block absolute z-10   " />
                    </div>
                </li>
                <li className="col-start-7 col-span-6">
                    <div className="h-96 w-full relative bg-gray-700 overflow-hidden">
                        <div className="absolute z-20  flex justify-center items-center  h-full bg-purple-700">
                            <h3 className="stroke font-display text-5xl font-bold">CHILDREN</h3>

                        </div>
                        <img src={childrenCollection} alt="" className="inline-block absolute  top-0 left-0 w-full " />
                    </div>
                </li> */}


            </ul>
        </div>

    );
}

export default Collections;