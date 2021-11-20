import React from 'react';
import Header from './Header';
import desktopHero from './assets/images/female-male-landscape.jpg';
import menCollection from './assets/images/landscape-male.jpg'

const LandingPage = () => {
    return (
        <div className="relative w-screen min-h-screen">
            <Header landingpage={true} />
            <div className="relative w-full h-screen z-0 top-0 bg-hero-image-desktop bg-contain bg-no-repeat  ">
                <img src={desktopHero} alt="" className=" object-cover  w-full h-full" />
            </div>
            <div>
                <h2>Our Collection</h2>
                <ul className="grid grid-cols-7">
                    <li className="col-start-1 col-span-7 h-10">
                        <div className="">
                            <img src={menCollection} alt="" className=" object-cover  w-full h-full" />
                        </div>
                    </li>
                    <li className="col-start-1 col-span-7 h-10">
                        <div className="">
                            <img src={menCollection} alt="" className=" object-cover  w-full h-full" />
                        </div>
                    </li>
                    <li className="col-start-1 col-span-7 h-10">
                        <div className="">
                            <img src={menCollection} alt="" className=" object-cover  w-full h-full" />
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