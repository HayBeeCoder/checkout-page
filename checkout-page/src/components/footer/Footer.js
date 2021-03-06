import React from 'react';
import DowloadUi from './sub-components/Dowload_ui';
import FooterIcon from './sub-components/FooterIcon'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaApple } from 'react-icons/fa';
import { DiAndroid } from "react-icons/di"
import { Link } from 'react-router-dom';
import FooterLink from './sub-components/Footerlink';
function Footer(props) {
    return (
        <div className="p-5 ">
            <div className="flex justify-between py-20">
                <div className="w-3/5 flex justify-between">

                    <div>
                        <h3 className="heading-3">About shopr</h3>
                        <ul>
                            <FooterLink href="/about-us" link="About Us" />
                            <FooterLink href="/contact" link="Contact Us" />
                            <FooterLink href="/terms_conditions" link="Terms and Conditions" />
                            {/* <FooterLink href="/about-us" link="About Us"/> */}
                            {/* <li>
                                <Link to="/" className="self-">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="self-">

                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="self-">

                                    Terms and Conditions
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <h3 className="heading-3">Payment</h3>
                        <ul>
                            <FooterLink href="/shoprPay" link="shoprPay" />
                            <FooterLink href="/wallet" link="Wallet" />
                            <FooterLink href="/verve" link="Verve" />
                            <FooterLink href="/mastercard" link="Mastercard" />
                            <FooterLink href="/visa" link="Visa" />
                            {/* <li>Wallet</li>
                            <li>Verve</li>
                            <li>MasterCard</li>
                            <li>Visa</li>  
                                                      <li>shoprPay</li> */}

                        </ul>
                    </div>
                    <div>
                        <h3 className="heading-3">Buying on shopr</h3>
                        <ul>
                            <FooterLink href="/faqs" link="FAQs" />
                            <FooterLink href="/return-policy" link="Shopr Return Policy" />
                            <FooterLink href="/bulk-purchase" link="Bulk Purchase" />
                            <FooterLink href="/digital-services" link="Digital Services" />
                            <FooterLink href="/buyer-safety-center" link="Buyer Safety Center" />

                        </ul>
                    </div>
                    <div>
                        <h3 className="heading-3">More Info</h3>
                        <ul>
                            <FooterLink href="/bulk-purchase" link="Site Map" />
                            <FooterLink href="/track-my-order" link="Track My Order" />
                            <FooterLink href="/private-policy" link="Private Policy" />
                            <FooterLink href="/authencity-policy" link="Authencity Policy" />
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
                <div className="bg-purple-100 h-1 flex-grow ">

                </div>
                <p>
                    Copyright ?? 2021 shopr.com. All rights reserved
                </p>
                <div className="bg-purple-100 h-1 flex-grow ">
                </div>
            </div>
        </div>
    );
}

export default Footer;