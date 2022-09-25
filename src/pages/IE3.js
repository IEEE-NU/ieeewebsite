import React from 'react'
import anonymous from '../images/anonymous.svg'
import brian_bowers from '../images/brian_bowers.jpg'

const IE3 = () => {
    return (
        <div>
        <section className="text-left flex items-center justify-center py-16 bg-gray-50 min-w-screen">
    <div className="max-w-6xl px-12 mx-auto md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase"><span className="font-bold">IE3</span> Technical Program</p>
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Testimonials</h2>
                <p className="mt-6 text-lg text-gray-600">Don't just take our word for it, here are some of our company representative testimonials! Every fall quarter, the IEEE Executive Board takes motivated students and guides them through a program focused on mentorship and the introductory exploration of an EECS-related technology.</p>
                <p className="my-6 text-lg text-gray-600">The annual IEEE NU Project Showcase is an opportunity for Northwestern students, both undergraduate and graduate, to present independent software and hardware projects to employers and the Northwestern community. Submissions can consist of any unique, portable, and easily demonstrable original creation. A panel of industry representatives evaluates each project on three main criteria:</p>
                <ol className="mt-3 mb-12">
                  <p className="text-lg text-gray-600">1. Real-World Practicality and Potential Application </p>
                  <p className="text-lg text-gray-600">2. Technical Difficulty</p>
                  <p className="text-lg text-gray-600">3. Effectiveness of Project's Execution</p>
                </ol>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfD1opUEVuyGyKEp70JlZRAq8jMuNMXAvob8LNxA46Meh-jvA/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">Apply</a>
            </div>
            <div className="w-full lg:w-1/2">
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
                    <div className="flex flex-col pr-8">
                        <div className="relative pl-12">
                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                            </svg>
                            <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">Being in the industry and seeing what people do in less than 10 weeks is impressive! Several of these projects can really go somewhere.</p>
                        </div>

                        <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                          Brian Bowers
                            <span className="mt-1 text-sm leading-5 text-gray-500 truncate"> - Fluence Auto.</span>
                        </h3>
                    </div>
                    <img className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24" src={ brian_bowers } alt=""/>
                </blockquote>
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                    <div className="flex flex-col pr-10">
                        <div className="relative pl-12">
                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                            </svg>
                            <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">Lots of great experimentation and innovation.</p>
                        </div>
                        <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                            Bradley May
                            <span className="mt-1 text-sm leading-5 text-gray-500 truncate"> - Accenture</span>
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src={ anonymous } alt=""/>
                </blockquote>
            </div>
        </div>
    </div>
</section>

<section className="items-center text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h2 className="mb-8 text-center text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"><span className="text-purple-800">2022 </span>IE3 Showcase</h2>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">BEST PROJECT</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">SUMMRI</h1>
          <p className="leading-relaxed mb-3">A web platform that makes it simpler to diagnose brain tumors from MRI scans using a classification ML model.</p>
          <p className="text-purple-500 inline-flex items-center">Chris Kang | Jiayan Luo | Lena Sauter | Ryan Newkirk | Stephen Savas</p>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">IMPACT AWARD</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">ClubHub</h1>
          <p className="leading-relaxed mb-3">An app designed for Northwestern’s student organizations to announce their events on a single, centralized platform.</p>
          <p className="text-purple-500 inline-flex items-center">Jordan Checkoff | Victoria Tran | Emily Wei | James Kim</p>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">TECHNICAL AWARD</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Sidekick</h1>
          <p className="leading-relaxed mb-3">A short-range autonomous car that follows the user and detects obstacles using a combination of ultrasonic and infrared sensors.</p>
          <p className="text-purple-500 inline-flex items-center">Andrew Guo | Evan Waite | Maia Traub | Peter Pinder | Dureece Byrde</p>
        </div>
      </div>

      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">DESIGN AWARD</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">MLoodify</h1>
          <p className="leading-relaxed mb-3">A web application that recommends a song based on a person's emotions using a decision tree ML algorithm.</p>
          <p className="text-purple-500 inline-flex items-center">Jeremy Tan | Rui Wen | Isaac Winoto | Jeffrey Wu</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
        )
    }
    
    export default IE3
