import React from 'react';
import DowloadUi from './sub-components/Dowload_ui';
import FooterIcon from './sub-components/FooterIcon'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaApple } from 'react-icons/fa';
import { DiAndroid } from "react-icons/di"
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <div className="p-5 bg-purple-100">
            <div className="flex justify-between py-20">
                <div className="w-3/5 flex justify-between">

                    <div>
                        <h3 className="heading-3">About shopr</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Terms and Conditions</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="heading-3">Payment</h3>
                        <ul>
                            <li>shoprPay</li>
                            <li>Wallet</li>
                            <li>Verve</li>
                            <li>MasterCard</li>
                            <li>Visa</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="heading-3">Buying on shopr</h3>
                        <ul>
                            <li>FAQs</li>
                            <li>Delivery</li>
                            <li>shopr Return Policy</li>
                            <li>Digital Services</li>
                            <li>Bulk Purchase</li>
                            <li>Buyer safety center</li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="heading-3">More Info</h3>
                        <ul>
                            <li>Site Map</li>
                            <li>Track My Order</li>
                            <li>Private Policy</li>
                            <li>Authenticity Policy</li>

                        </ul>
                    </div>

                </div>

                <div>
                    <div>
                        <h3 className=" heading-3 ">Download Our App</h3>

                        <div className="flex gap-3 text-white">
                            <DowloadUi platform="Apple" >
                                <FaApple className="text-3xl " />
                            </DowloadUi>
                            <DowloadUi platform="Android"  >
                                <DiAndroid className="text-3xl " />
                            </DowloadUi>

                        </div>
                    </div>
                    <div className="mt-7">
                        <h3 className=" heading-3 ">Connect with us</h3>
                        <div className="flex gap-4">
                            {/* <Link to="/" className="p-2 rounded bg-purple-800">
                            </Link> */}
                            < FooterIcon>
                                <FaFacebook className="text-2xl  text-white " />
                            </FooterIcon>
                            < FooterIcon>
                                <FaTwitter className="text-2xl  text-white " />
                            </FooterIcon>
                            < FooterIcon>
                                <FaInstagram className="text-2xl  text-white " />
                            </FooterIcon>
                            < FooterIcon>
                                <FaYoutube className="text-2xl  text-white " />
                            </FooterIcon>




                            {/* 
                            <Link to="/" className="p-2 rounded bg-purple-800">
                                <FaTwitter className="text-4xl  text-white " />
                            </Link>
                            <Link to="/" className="p-2 rounded bg-purple-800">
                                <FaInstagram className="text-4xl  text-white " />
                            </Link>
                            <Link to="/" className="p-2 rounded bg-purple-800">
                                <FaYoutube className="text-4xl  text-white " />
                            </Link> */}
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-between gap-3 items-center">
                <div className="bg-white h-1 flex-grow ">

                </div>
                <p>
                    Copyright © 2021 shopr.com. All rights reserved
                </p>
                <div className="bg-white h-1 flex-grow ">
                </div>
            </div>
        </div>
    );
}

export default Footer;