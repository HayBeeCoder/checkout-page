import { Link } from 'react-router-dom';
import React from 'react';
import Header from './components/header/Header';
import desktopHero from './assets/images/female-male-landscape.jpg';
import menCollection from './assets/images/landscape-male.jpg'
import womenCollection from './assets/images/landscape-female.jpeg'
import childrenCollection from './assets/images/landscape-male.jpg'
import Button from './Button.js';
import Collections from '../src/components/header/sub-components/Collections';
import Testimonials from '../src/components/testimonials/Testimonials';
import Subscription from './Subscription';
import Slider from "./components/header/sub-components/slider/Slider.js"

import Footer from './components/footer/Footer';

import { HashLink, NavHashLink } from 'react-router-hash-link';

const LandingPage = () => {
    return (
        <div className="relative w-full scrol min-h-screen overflow-x-hidden">
            <Header landingpage={true} />
            <div className="relative w-full h-screen z-0 top-0  overflow-x-hidden">
                <div className="absolute w-full h-full top-0 left-0 z-30 bg-black bg-opacity-80"></div>
                <div className="absolute h-full w-full z-50 text-white  flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-8xl font-extrabold">YOU DESERVE BETTER</h1>
                    <p className="text-xl italic">Let's go get what you deserve , dear</p>

                    <HashLink smooth to={'/#section-collections'}>
                        <Button className="uppercase  my-7 bg-purple-800 text-white  py-4 px-16 text-xl tracking-widest" buttonFor="Start Shopping" />

                    </HashLink>

                </div>
                {/* <div > <video src={}></video> */}
                {/* <Slider image={desktopHero} /> */}
                 </div>
            <Collections />
           <Testimonials/>
            <Subscription />
            <Footer />
        </div>

    );
};

export default LandingPage;