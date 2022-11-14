import React from 'react'
import ie3 from '../images/ie3/2022ie3.png';
import ieeelogo from '../images/logo/ieee-icon.svg';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="bg-violet-900 py-20 pb-36 mx-auto text-center sm:px-4">
        
        <div className="grid grid-cols-3 gap-4 justify-self-auto mb-6">
        <div className="..."></div>
        <div className="">
        <img className="lg:px-28 w-full h-full" alt='ieee logo' src={ ieeelogo } />
        </div>
        <div className="..."></div>
        </div>
        
        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
        <span className="block">
        We are NU IEEE.
        </span>
        </h1>
        
        <div className="px-4 max-w-lg mx-auto text-sm text-center mt-4 md:mt-8 sm:text-base md:max-w-xl md:text-lg xl:text-xl text-white">
        Northwestern University's Student Chapter of the Institute of Electrical and Electronics Engineers
        </div>
        
        <Link to="/about" className="inline-flex items-center justify-center w-auto h-full mt-6 px-5 py-2 text-base font-medium leading-6 text-purple-700 whitespace-no-wrap transition duration-500 ease-in-out bg-white border border-transparent rounded hover:bg-purple-500 hover:text-white focus:outline-none focus:border-purple-800 focus:shadow-purple-NaN active:bg-purple-800">
        About Us
        </Link>
        
        <div className="mt-8 text-sm text-violet-400">
        <Link to="about#our_team">
        <u>See our 2022-23 executive board here.</u>
        </Link>
        </div>
        
        <div className="px-4 pt-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-36">
        <div
        className="flex flex-col max-w-screen-lg overflow-hidden bg-white rounded-lg shadow-xl lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
        <img src={ ie3 }
        alt="2022 IE3 Cast" className="object-cover w-full lg:absolute h-80 lg:h-full" />
        <svg className="absolute top-0 right-0 hidden h-full text-white lg:inline-block" viewBox="0 0 20 104"
        fill="currentColor">
        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
        </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
        <div> 
        <p
        className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-600 uppercase bg-purple-200 rounded-full">
        Program
        </p>
        </div>
        <h5 className="text-3xl font-extrabold leading-none sm:text-5xl">
        The IE3 Program <span className="block text-purple-500 hover:text-purple-700 transition duration-500 xl:inline"> has begun!</span>
        </h5>
        <p className="py-5 mb-5 text-gray-800">
        Applications for the 2022-23 school year are now closed.
        </p>
        <div className="flex justify-center">
        </div>
        </div>
        </div>
        </div>
        </div>
        )
    }
    
    export default Home
