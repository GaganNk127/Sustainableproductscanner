import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-blue-950 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <h1 className="text-2xl text-white">
                            Eco <span className="text-2xl text-orange-700">Sneeko</span>
                        </h1>
                    </Link>

                    {/* Hamburger Menu Icon */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-gray-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        <svg
                            className="w-6 h-6 hover:bg-blue-500 p-1 rounded"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`${
                            isOpen ? 'block' : 'hidden'
                        } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-white bg-blue-950' : 'text-orange-700'
                                        } border-b border-black hover:bg-blue-950 hover:text-white lg:hover:bg-transparent lg:border-0 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/ProductForm"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-white bg-blue-950' : 'text-orange-700'
                                        } border-b border-black hover:bg-blue-950 hover:text-white lg:hover:bg-transparent lg:border-0 lg:p-0`
                                    }
                                >
                                    Sustanability Check
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/About"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-white bg-blue-950' : 'text-orange-700'
                                        } border-b border-black hover:bg-blue-950 hover:text-white lg:hover:bg-transparent lg:border-0 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Products"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-white bg-blue-950' : 'text-orange-700'
                                        } border-b border-black hover:bg-blue-950 hover:text-white lg:hover:bg-transparent lg:border-0 lg:p-0`
                                    }
                                >
                                    Sustainable Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Scanner"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-white bg-blue-950' : 'text-orange-700'
                                        } border-b border-black hover:bg-blue-950 hover:text-white lg:hover:bg-transparent lg:border-0 lg:p-0`
                                    }
                                >
                                    Scan barcode
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
