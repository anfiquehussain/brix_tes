import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";
import {FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the navbar if clicked outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navbarRef]);

    // Close the menu when the window resizes to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    //function to render a navigation link
    const renderNavigationLink = (to, label) => (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? 'text-brand-primary' : 'text-brand-dark hover:text-brand-primary'
            }
        >
            {label}
        </NavLink>
    );

    return (
        <nav className="bg-white font-medium text-base p-2 md:p-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navbarRef}>
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img src='\images\logo\icon_sg.png' alt="logo" className="w-10 h-10 rounded-full border-4 border-brand-primary" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {renderNavigationLink("/", "Home")}
                        {renderNavigationLink("/about", "About Us")}
                        {renderNavigationLink("/projects", "Projects")}
                        {renderNavigationLink("/services", "Services")}
                        {renderNavigationLink("/contact-us", "Contact Us")}
                    </div>

                    {/* User Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className='flex items-center space-x-1'>
                            <AiOutlineShoppingCart className="text-gray-700 text-2xl" />
                            {renderNavigationLink("/cart", "Cart")}
                        </div>
                        <div className='flex items-center space-x-1'>
                            <FaRegUser className="text-gray-700" />
                            {renderNavigationLink("/login", "Sign In / Sign Up")}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} aria-expanded={isOpen} className="text-gray-700 focus:outline-none">
                            <LuMenu className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} transition-all duration-700 ease-in-out overflow-hidden`}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    <div className="flex flex-col text-center space-y-1 md:flex-row md:space-x-4 md:space-y-0">
                        {renderNavigationLink("/", "Home")}
                        {renderNavigationLink("/about", "About Us")}
                        {renderNavigationLink("/projects", "Projects")}
                        {renderNavigationLink("/services", "Services")}
                        {renderNavigationLink("/contact-us", "Contact Us")}
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2 pt-2">
                        <div className='flex items-center space-x-1'>
                            <AiOutlineShoppingCart className="text-gray-700 text-2xl" />
                            {renderNavigationLink("/cart", "Cart")}
                        </div>
                        <div className='flex items-center space-x-1'>
                            <FaRegUser className="text-gray-700" />
                            {renderNavigationLink("/login", "Sign In / Sign Up")}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
