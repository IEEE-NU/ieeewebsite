import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    return (
    <header className="bg-violet-900 relative z-50 w-full h-24">
        <div
            className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">

            <Link to="/" className="relative flex items-center inline-block h-5 h-full font-black leading-none">
                <span className="ml-3 text-xl text-white">IEEE <span className="text-violet-500 transition duration-300 hover:text-purple-400">@Northwestern</span></span>
            </Link>

            <nav id="nav" 
                className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-white bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative">
                <Link to='/' className="transition duration-300 hover:text-purple-400  ml-0 mr-0 font-bold duration-100 md:-ml-20 md:mr-3 lg:mr-8 transition-color hover:text-violet-600">
                    Home
                </Link>
                <Link to='about' className="transition duration-300 hover:text-purple-400  mr-0 font-bold md:mr-3 lg:mr-8 transition-color">
                    About
                </Link>
                <Link to='events' className="transition duration-300 hover:text-purple-400  mr-0 font-bold md:mr-3 lg:mr-8 transition-color">
                   Events
                </Link>
                <Link to='ie3' className="transition duration-300 hover:text-purple-400 font-bold transition-color">
                    IE3 Program
                </Link>
            </nav>

            <div
                className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
                <a href="mailto: ieee@u.northwestern.edu"
                    className="transition duration-300 hover:bg-purple-700 relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-purple-500 rounded shadow-md fold-bold sm:w-full lg:shadow-none hover:shadow-xl">
                    Contact</a>
            </div>

            <div id="nav-mobile-btn" onClick={toggle} className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10">
                <span className="block w-full h-1 mt-1.5 duration-200 transform bg-white rounded-full sm:mt-1"></span>
                <span className="block w-full h-1 mt-1 duration-200 transform bg-white rounded-full"></span>
                <span className="block w-full h-1 mt-1 duration-200 transform bg-white rounded-full"></span>
            </div>

        </div>
    </header>
    )
}

export default Navbar
