import { Link } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import desktopHero from './assets/images/female-male-landscape.jpg';
import menCollection from './assets/images/landscape-male.jpg'
import womenCollection from './assets/images/landscape-female.jpeg'
import childrenCollection from './assets/images/landscape-male.jpg'
import Button from './Button.js'
const LandingPage = () => {
    return (
        <div className="relative w-screen min-h-screen overflow-x-hidden">
            <Header landingpage={true} />
            <div className="relative w-full h-screen z-0 top-0 bg-hero-image-desktop bg-contain bg-no-repeat overflow-x-hidden">
                <div className="absolute w-full h-full top-0 left-0 z-30 bg-black bg-opacity-80"></div>
                <div className="absolute h-full w-full z-50 text-white  flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-8xl font-extrabold">YOU DESERVE BETTER</h1>
                    <p className="text-xl italic">Let's go get what you deserve , dear</p>
                    <Button className="uppercase  my-7 bg-purple-800 text-white  py-4 px-16 text-xl tracking-widest" buttonFor="Start Shopping" />
                </div>
                <img src={desktopHero} alt="" className=" object-cover  w-full h-full" />
            </div>
            <div className="py-28">
                <h2 className="text-center tracking-wide leading-loose my-6 font-display font-bold text-4xl ">Our  <span className="text-purple-700">Collections</span> </h2>
                <ul className="grid grid-cols-12  gap-3 w-full overflow-hidden">
                    <li className="col-start-4 col-span-6">
                        <div className="h-96 w-full relative bg-gray-700 overflow-hidden">
                            <div className="absolute z-20 left-0 right-1/2 flex justify-center flex-col gap-7 items-center right-0 h-full bg-purple-700">
                                <h3 className="stroke font-display text-5xl font-bold">MEN</h3>
                                <Link to="/store/men-collections">
                                    <Button className=" border-1  bg-transparent text-white  py-4 px-16 text-xl tracking-widest" buttonFor="SHOP" />

                                </Link>

                            </div>

                            <img src={menCollection} alt="" className="inline-block absolute  top-0 left-0 " />
                        </div>
                    </li>
                    <li className="col-start-1 col-span-6">
                        <div className="h-96 w-full relative bg-gray-700 overflow-hidden">
                            <div className="absolute z-20 left-1/2 flex justify-center items-center right-0 h-full bg-purple-700">
                                <h3 className="stroke font-display text-5xl font-bold">WOMEN</h3>

                            </div>
                            <img src={womenCollection} alt="" className="inline-block absolute z-10  top-0 left-0 " />
                        </div>
                    </li>
                    <li className="col-start-7 col-span-6">
                        <div className="h-96 w-full relative bg-gray-700 overflow-hidden">
                            <div className="absolute z-20 left-0 right-1/2 flex justify-center items-center right-0 h-full bg-purple-700">
                                <h3 className="stroke font-display text-5xl font-bold">CHILDREN</h3>

                            </div>
                            <img src={childrenCollection} alt="" className="inline-block absolute  top-0 left-0 w-full " />
                        </div>
                    </li>


                </ul>
            </div>

            <div>
                <h2>Subscribe For Our NewsLetter</h2>
                <div>
                    Input
                </div>
            </div>
        </div>

    );
};

export default LandingPage;