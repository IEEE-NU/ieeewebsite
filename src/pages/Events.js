import React from 'react'
import oldshowcase from '../images/ie3/old_ie3showcase.png'
import oldshowcase2 from '../images/ie3/old_ie3showcase2.png'
import food from '../images/ie3/food.png';

const Events = () => {
    return (
<section className="text-left relative w-full bg-white">
  <div className="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
  <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">

      <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">Events</h1>
      <p className="text-lg font-medium text-gray-500 sm:text-2xl">Here are the latest and upcoming occasions for the organization.</p>
      
      <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
          <div className="px-6 grid grid-cols-12 col-span-6 md:col-span-12 gap-7">

              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <img alt="Old Showcase" className="block transition duration-200 ease-out transform hover:scale-110 object-cover w-auto shadow-sm max-h-56" src={ oldshowcase }/>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                      <div className="bg-blue-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                          <span>April 2022</span>
                      </div>
                      <h2 className="text-base font-bold sm:text-lg md:text-xl">IE3 Project Showcase</h2>
                     <p className="mt-2 text-sm text-gray-500">Check out the software and hardware projects our Northwestern students made! Location TBA.</p>
                  </div>
              </div>

              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <img alt="Food" className="block transition duration-200 ease-out transform hover:scale-110 object-cover w-auto shadow-sm max-h-56" src={ food }/>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                      <div className="bg-green-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                          <span>May 2022</span>
                      </div>
                      <h2 className="text-base font-bold sm:text-lg md:text-xl">IEEE Retreat</h2>
                     <p className="mt-2 text-sm text-gray-500">Our current exec will treat all inaugurated members to lunch down in Chicago!</p>
                  </div>
              </div>

              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <img alt="Old Showcase 2" className="block transition duration-200 ease-out transform hover:scale-110 object-cover w-auto shadow-sm max-h-56" src={ oldshowcase2 }/>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                      <div className="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                          <span>2022-23</span>
                      </div>
                      <h2 className="text-base font-bold sm:text-lg md:text-xl">More Events Coming Soon</h2>
                      <p className="mt-2 text-sm text-gray-500">Our social chairs are busy planning up the latest events for our community! Check back later!</p>
                  </div>
              </div>

          </div>
      </div>
  </div>
</section>
        )
    }
    
    export default Events
