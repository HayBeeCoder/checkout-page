import { categories } from './models/data'
import Button from './Button.js';
import React from 'react';
import { Link } from 'react-router-dom';

function Collections(props) {
    const specificClass = [
        {
            li: "col-start-4 col-span-6",
            absolute: "left-0 right-1/2",

        },
        {
            li: "col-start-1 col-span-6",
            absolute: "right-0 left-1/2",

        },
        {
            li: "col-start-7 col-span-6",
            absolute: "left-0 right-1/2",

        },
    ]
    return (
//smooth for smooth scrolling
        <div smooth="true" id="section-collections" className="py-28">
            <h2 className="heading-2">Our  <span className="text-purple-700">Collections</span> </h2>
            <ul className="grid grid-cols-12  gap-3 w-full overflow-hidden">
                {categories.map((category, index) => (
                    <li className={specificClass[index].li} key={index}>
                        <div className="h-96 w-full relative bg-gray-700 overflow-hidden">
                            <div className={"absolute z-20  flex justify-center flex-col gap-7 items-center h-full bg-purple-700 " + specificClass[index].absolute}>
                                <h3 className="stroke font-display text-5xl font-bold uppercase">{category.category}</h3>
                            <Link to={"/collections/" + category.category}>
                                    <Button className=" border-1  bg-transparent text-white  py-4 px-16 text-xl tracking-widest hover:bg-white hover:text-purple-700" buttonFor="SHOP" />

                                </Link>

                            </div>

                            <img src={category.img} alt="" className="inline-block absolute bottom-0 top-0 left-0 " />
                        </div>
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