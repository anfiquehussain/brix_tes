import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineFacebook } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { FaSquareTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

function Footer() {
    return (
        <footer className="flex flex-col bg-brand-footer-bg text-brand-light-gray p-6">
            {/* Logo and Links Section */}
            <div className="flex flex-col md:flex-row items-center mb-4">
                <img src="\images\logo\footer_logo.png" alt="Bricks and Mix Logo" className="h-10 w-auto mb-2" />
                <p className="text-center m-auto text-xs text-brand-text-light">
                    <NavLink to="/about" className="hover:underline" aria-label="About bricksnmix.com">About bricksnmix.com</NavLink> |{' '}
                    <NavLink to="/warranty" className="hover:underline" aria-label="Warranty policy">Warranty policy</NavLink> |{' '}
                    <NavLink to="/privacy" className="hover:underline" aria-label="Privacy policy">Privacy policy</NavLink> |{' '}
                    <NavLink to="/terms" className="hover:underline" aria-label="Terms and Conditions">Terms and Conditions</NavLink> |{' '}
                    <NavLink to="/contact" className="hover:underline" aria-label="Contact us">Contact us</NavLink>
                </p>
            </div>

            {/* Information Section */}
            <div className="flex flex-col md:flex-row md:justify-between mb-4 text-sm gap-x-5">
                <div className="mb-4 md:mb-0 md:w-1/2">
                    <h2 className="text-lg font-semibold">About Us</h2>
                    <p className="text-brand-text-light">
                        bricksnmix is transforming online shopping into an experience and aims
                        to enrich your shopping list wisely. With a wide range of products powered
                        by fast delivery and 24/7 customer service, we enhance seamless
                        shopping.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-lg font-semibold">24/7 Customer Support</h2>
                    <p className="text-brand-text-light">
                        The bricksnmix support team is hard-working 24/7 for our customers. We give
                        high priority to troubleshooting and resolving all complaints and issues of
                        our customers. We will provide complete support until your face smiles.
                    </p>
                </div>
            </div>

            {/* Seller and Social Connections Section */}
            <div className="flex flex-col md:flex-row mb-4 items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold">Become a Seller</h2>
                    <div className='flex flex-row gap-2'>
                        <button className="bg-brand-light-gray text-brand-primary py-2 px-4 rounded-lg font-semibold hover:bg-brand-primary hover:text-white">Register as Seller</button>
                        <button className="bg-brand-light-gray text-brand-primary py-2 px-4 rounded-lg font-semibold hover:bg-brand-primary hover:text-white">Login as Seller</button>
                    </div>
                </div>
                <div className="ml-4">
                    <h2 className="text-lg font-semibold">Connect with Us</h2>
                    <div className="flex space-x-2">
                        <NavLink to="/youtube" className="flex items-center" aria-label="Follow us on YouTube">
                            <TfiYoutube className="text-brand-text-light  hover:text-brand-primary" size={24} />
                        </NavLink>
                        <NavLink to="/facebook" className="flex items-center " aria-label="Follow us on Facebook">
                            <AiOutlineFacebook className="text-brand-text-light hover:text-brand-primary" size={24} />
                        </NavLink>
                        <NavLink to="/instagram" className="flex items-center" aria-label="Follow us on Instagram">
                            <CiInstagram className="text-brand-text-light hover:text-brand-primary" size={24} />
                        </NavLink>
                        <NavLink to="/twitter" className="flex items-center" aria-label="Follow us on Twitter">
                            <FaSquareTwitter className="text-brand-text-light hover:text-brand-primary" size={24} />
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-6">
                <p className='text-brand-text-light text-xs'>Copyright 2024 bricksnmix.com. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
