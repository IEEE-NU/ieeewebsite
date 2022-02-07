import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={
            isOpen 
            ? 'md:hidden bg-violet-800 py-6 grid grid-rows-4 text-center items-center text-violet-50' 
            : 'hidden'} 
            onClick={toggle}>
            <Link to='/' className="transition duration-300 hover:text-purple-400 font-bold transition-color">
                Home
            </Link>
            <Link to='/about' className="transition duration-300 hover:text-purple-400 font-bold transition-color">
                About
            </Link>
            <Link to='/events' className="transition duration-300 hover:text-purple-400 font-bold transition-color">
                Events
            </Link>
            <Link to='/ie3' className="transition duration-300 hover:text-purple-400 font-bold transition-color">
                IE3 Program
            </Link>
        </div>
    )
}

export default Dropdown
