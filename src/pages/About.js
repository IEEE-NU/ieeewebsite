import React, { useState } from 'react'
import Originals from '../images/originals.jpg'
import ieeeblack from '../images/logo/ieee_black.svg'
import Evan from '../images/exec/2022-23/evan.png'
import Sengdao from '../images/exec/2022-23/sengdao.png'
import Tim from '../images/exec/2022-23/tim.jpg'
import Anna from '../images/exec/2022-23/anna.png'
import Carol from '../images/exec/2022-23/carol.png'
import Alan from '../images/sponsors/alan-sahakian.jpg'
import Sean from '../images/exec/2022-23/sean.png'
import Kelly from '../images/exec/2022-23/kelly.png'
import Emily from '../images/exec/2022-23/emily.png'
import Winston from '../images/exec/2022-23/winston.png'

import Amil from '../images/exec/2021-22/amil.png'
import Harita from '../images/exec/2021-22/harita.png'
import James from '../images/exec/2021-22/james.png'
import Jerry from '../images/exec/2021-22/jerry.png'
import Linus from '../images/exec/2021-22/linus.png'
import Molly from '../images/exec/2021-22/molly.png'
import Nicole from '../images/exec/2021-22/nicole.png'
import Siwoo from '../images/exec/2021-22/siwoo.png'

import anonymous from '../images/anonymous.svg'
import { Link } from 'react-router-dom'
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material'

const About = () => {
  let [year, setYear] = useState("2022-23");
  let [execBoard, setExecBoard] = useState(0);

  let execBoardData = [
    // 2022-2023 board
    {
      co_president_one: [Tim, "Timothy Sinaga", "Junior / Computer Science"],
      co_president_two: [Sengdao, "Sengdao Inthavong", "Junior / Computer Science"],
      technical_director: [Kelly, "Kelly Mei", "Junior / CS & Design"],
      treasurer: [Evan, "Evan Waite", "Junior / CS & Comp. Engineering"],
      secretary: [Emily, "Emily Wei", "Sophomore / Computer Science"],
      webmaster: [Anna, "Anna Cai", "Sophomore / Computer Science"],
      social_chair: [Carol, "Carol Liu", "Junior / Applied Math"],
      publicity_chair: [Sean, "Sean Han", "Sophomore / Computer Science"],
      outreach_chair: [Winston, "Winston Ding", "Junior / Computer Science"]
    },
    // 2021-2022 board
    {
      co_president_one: [Amil, "Amil Dravid", "Computer Science"],
      co_president_two: [Jerry, "Jerry Okina", "Computer Science"],
      technical_director: [Siwoo, "Si Woo Park", "Computer Science"],
      treasurer: [Tim, "Timothy Sinaga", "Computer Science"],
      secretary: [Nicole, "Nicole Wojcik", "Computer Science"],
      webmaster: [Sengdao, "Sengdao Inthavong", "Computer Science"],
      social_chair: [James, "James Liu", "Comp. Engineering"],
      publicity_chair: [Linus, "Linus Okoth", "Computer Science"],
      outreach_chair: [Harita, "Harita Duggirala", "Computer Science"]
    }
  ];

  let handleChange = (event) => {
    setYear(event.target.value);
    if (event.target.value == "2022-23") {
      setExecBoard(0);
    } else if (event.target.value == "2021-22") {
      setExecBoard(1);
    }
  };

    return (
        <div className="text-left">
            <div className="my-16 container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
            <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full lg:max-w-md">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Who are we?</h2>
            <p className="text-lg leading-7 mb-4 font-medium tracking-tight text-gray-700 xl:mb-6">The <span className="font-bold text-purple-800">Northwestern University Student Chapter of the Institute of Electrical and Electronics Engineers (IEEE NU)</span> is an organization dedicated to providing the resources and outlets through which the University's aspiring engineers, tinkerers, and hackers can grow on a technical and professional standpoint. </p>
            <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            <p className="font-medium text-gray-700">We host an annual <Link to="/ie3" className="font-bold transition duration-500 hover:text-purple-700">IE3 Showcase</Link> where members show off a quarter-long project to company representatives!</p>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            <p className="font-medium text-gray-700">Our social chairs hold <span className="font-bold">HackNights</span> and <span className="font-bold">hands-on educational events</span> co-hosted with other engineering clubs on campus!</p>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <p className="font-medium text-gray-700">Funded by <span className="font-bold">Northwestern University's Electrical Engineering and Computer Science (EECS) department</span></p>
            </li>
            </ul>
            </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl" src={ Originals } alt="Original IE3 Group"></img></div>
            </div>
            </div>
            <div className="bg-gray-100">
            <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            </div>
            </div>
            </div>
            <section className="w-full bg-purple-100 pt-7 pb-7 md:pt-20 md:pb-24">
  <div className="box-border flex flex-col items-center content-center px-8 mx-auto mb-10 leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
      <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <img alt="" src="https://cdn.devdojo.com/images/december2020/settings.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"/>
      </div>
      <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">''Advancing Technology for Humanity''</h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">At Northwestern, our engineers are 
          <span className="font-bold"> whole-brain thinkers</span>. 
          The same holds for us at Northwestern IEEE. Whether it is creating mask-detecting drones or dining hall meal recommendation apps, 
          our members of various backgrounds and experience-level are constantly working on real solutions to 
          <span className="font-bold"> real-world engineered scenarios.</span></p>
      </div>
  </div>
  <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

      <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">Our Mission</h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">As one of the largest technical organizations at NU, 
          it is important that IEEE connects with the greater Northwestern community, both to foster relationships between the organization and other students, 
          as well as ensure that students know what opportunities are available to them in computer science. 
          <span className="font-bold"> Many of IEEE's events are open to all Northwestern students.</span></p>
          <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-600 rounded-full"><span className="text-sm font-bold">✓</span></span> HackNights
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-600 rounded-full"><span className="text-sm font-bold">✓</span></span> Social Events
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-purple-600 rounded-full"><span className="text-sm font-bold">✓</span></span> IE3 Technical Program
              </li>
          </ul>
      </div>
      <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <img src={ ieeeblack } alt="" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/>
      </div>
  </div>
</section>
<section id="our_team" className="relative py-20 overflow-hidden bg-white">
    <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
      <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
    </span>
    
    <span className="absolute bottom-0 left-0"> </span>
    
    <div className="relative px-16 mx-auto max-w-7xl">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <p className="font-medium tracking-wide text-purple-700 uppercase"><span className="font-semibold">{year}</span> | EXECUTIVE BOARD</p>
          <h2 className="relative max-w-lg mt-5 mb-10 text-3xl font-semibold leading-tight lg:text-4xl">Meet our incredible team of amazing individuals!</h2>
        </div>
        <FormControl sx={{ mb: 5, minWidth: 140 }} size="medium">
          <InputLabel id="demo-simple-select-label">Class Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Class Year"
              value={year}
              onChange={handleChange}
            >
              <MenuItem value={"2022-23"}>2022-2023</MenuItem>
              <MenuItem value={"2021-22"}>2021-2022</MenuItem>
            </Select>
        </FormControl>
      </div>
      <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
            <img className="relative z-20 w-full rounded-full" src={ execBoardData[execBoard].co_president_one[0] } alt=""/>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3 className="">{ execBoardData[execBoard].co_president_one[1] }</h3>
              <p className="text-purple-700">Co-President</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3 text-gray-400">
              { execBoardData[execBoard].co_president_one[2] }
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
            <img className="relative z-20 w-full rounded-full" src={ execBoardData[execBoard].co_president_two[0] } alt=""/>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{ execBoardData[execBoard].co_president_two[1] }</h3>
              <p className="text-purple-700">Co-President</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3 text-gray-400">
            { execBoardData[execBoard].co_president_two[2] }
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
            <img className="relative z-20 w-full rounded-full" src={ execBoardData[execBoard].technical_director[0] } alt=""/>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3 className="">{ execBoardData[execBoard].technical_director[1] }</h3>
              <p className="text-purple-700">Technical Director</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3 text-gray-400">
              { execBoardData[execBoard].technical_director[2] }
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
            <img alt="" className="relative z-20 w-full rounded-full" src={ execBoardData[execBoard].treasurer[0] }/>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{ execBoardData[execBoard].treasurer[1] }</h3>
              <p className="text-purple-700">Treasurer</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3 text-gray-400">
              { execBoardData[execBoard].treasurer[2] }
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
            <img className="relative z-20 w-full rounded-full" src={ execBoardData[execBoard].secretary[0] } alt=""/>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{ execBoardData[execBoard].secretary[1] }</h3>
              <p className="text-purple-700">Secretary</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3 text-gray-400">
              { execBoardData[execBoard].secretary[2] }
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
            <img className="relative z-20 w-full rounded-full" src={ execBoardData[execBoard].webmaster[0] } alt=""/>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{ execBoardData[execBoard].webmaster[1] }</h3>
              <p className="text-purple-700">Webmaster</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3 text-gray-400">
              { execBoardData[execBoard].webmaster[2] }
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
            <img className="relative z-20 w-full rounded-full" src={ execBoardData[execBoard].social_chair[0] } alt=""/>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{ execBoardData[execBoard].social_chair[1] }</h3>
              <p className="text-purple-700">Social Chair</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3 text-gray-400">
            { execBoardData[execBoard].social_chair[2] }
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
            <img className="relative z-20 w-full rounded-full" src={ execBoardData[execBoard].publicity_chair[0] } alt=""/>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{ execBoardData[execBoard].publicity_chair[1] }</h3>
              <p className="text-purple-700">Publicity Chair</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3 text-gray-400">
            { execBoardData[execBoard].publicity_chair[2] }
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
            <img className="relative z-20 w-full rounded-full" src={ execBoardData[execBoard].outreach_chair[0] } alt=""/>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{ execBoardData[execBoard].outreach_chair[1] }</h3>
              <p className="text-purple-700">Outreach Chair</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3 text-gray-400">
              { execBoardData[execBoard].outreach_chair[2] }
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="our_team" className="relative py-20 overflow-hidden bg-white">
    <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
      <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-pink-50"></span>
    </span>
    
    <span className="absolute bottom-0 left-0"> </span>
    
    <div className="relative px-16 mx-auto max-w-7xl">
      <p className="font-medium tracking-wide text-purple-700 uppercase"><span className="font-semibold">2022-23</span> | Faculty Sponsor</p>
      <h2 className="relative max-w-lg mt-5 mb-10 text-3xl font-semibold leading-tight lg:text-4xl">A huge thank you from us to our faculty sponsor!</h2>
      <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative p-5">
            <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
            <img alt="" className="relative z-20 w-full rounded-full" src={ Alan }/>
          </div>
          <div className="mt-3 space-y-2 text-center">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3 className="">Alan V. Sahakian</h3>
              <p className="text-purple-700">Associate Dean of McCormick</p>
            </div>
            <div className="relative flex items-center justify-center space-x-3 text-gray-400">
              Professor of Electrical and Computer Engineering and Biomedical Engineering
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
    <section className="py-20 bg-white">
        <div
        className="relative flex flex-col items-center w-full max-w-6xl px-4 py-8 mx-auto text-center rounded-lg shadow-2xl lg:text-left lg:block bg-gradient-to-br from-purple-600 via-indigo-500 to-teal-400 sm:px-6 md:pb-0 md:pt-12 lg:px-12 lg:py-12">
        <h2
            className="my-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:my-0 xl:text-4xl sm:leading-tight">
            Interested in <span className="block text-indigo-200 xl:inline">IEEE?</span>
        </h2>
        <p className="mt-1 mb-10 text-sm font-medium text-indigo-200 xl:text-base xl:tracking-wider lg:mb-0">
            Become a member of our community today!</p>
        <div className="flex mb-8 lg:mt-6 lg:mb-0">
            <div className="inline-flex">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdL6O7xxl3xvp5xerTc6hD9Dv7iu0bQK_8tjJonKYUIGnk10w/viewform?usp=sf_link" target="_blank" rel="noreferrer" 
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300">
                    Sign Up Today
                </a>
            </div>
        </div>
        <div className="bottom-0 right-0 mb-0 mr-3 lg:absolute lg:-mb-12">
            <img alt="Conquer clip art" src="https://cdn.devdojo.com/images/september2020/cta-1.png"
                className="max-w-xs mb-4 opacity-75 md:max-w-2xl lg:max-w-lg xl:mb-0 xl:max-w-md"></img>
        </div>
    </div>
    </section>
</div>
        )
    }
    
    export default About
