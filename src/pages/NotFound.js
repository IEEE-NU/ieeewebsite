import React from 'react'

const NotFound = () => {
    return (
        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div className="flex flex-wrap items-center -mx-3">
        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
        <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Who are we?</h2>
        <p className="text-lg leading-7 mb-4 font-medium tracking-tight text-gray-700 xl:mb-6">The <a className="font-bold text-purple-800">Northwestern University Student Chapter of the Institute of Electrical and Electronics Engineers (IEEE NU)</a> is an organization dedicated to providing the resources and outlets through which the University's aspiring engineers, tinkerers, and hackers can grow on a technical and professional standpoint. </p>
        <ul>
        <li className="flex items-center py-2 space-x-4 xl:py-3">
        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        <span className="font-medium text-gray-700">We host an annual <a href="ie3.html" className="font-bold transition duration-500 hover:text-purple-700">IE3 Showcase</a> where members show off a quarter-long project to company representatives!</span>
        </li>
        <li className="flex items-center py-2 space-x-4 xl:py-3">
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
        <span className="font-medium text-gray-700">Our social chairs hold <a className="font-bold">HackNights</a> and <a className="font-bold">hands-on educational events</a> co-hosted with other engineering clubs on campus!</span>
        </li>
        <li className="flex items-center py-2 space-x-4 xl:py-3">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        <span className="font-medium text-gray-700">Funded by <a className="font-bold">Northwestern University's Electrical Engineering and Computer Science (EECS) department</a></span>
        </li>
        </ul>
        </div>
        </div>
        <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl" src="public\ie3\originals.jpg" alt="feature image"></img></div>
        </div>
        </div>
        )
    }
    
    export default NotFound
