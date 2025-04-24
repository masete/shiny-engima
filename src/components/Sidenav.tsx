'use client'

// Import necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { PiBankLight } from "react-icons/pi";
import { BsListTask } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoGiftSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

// Define the Sidenav component
export default function Sidenav({ sidebarOpen, setSidebarOpen }: any) {
  // Define state for sidebar expansion
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Create a reference to the sidebar element
  const sidebar = useRef(null);

  // Effect to add or remove a class to the body element based on sidebar expansion
  useEffect(() => {
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <>
      {/* Sidebar backdrop (visible on mobile only) */}
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed inset-0 border-r border-gray-200 sm:translate-x-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`fixed flex flex-col z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-64  w-72 bg-white lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 sm:translate-x-0 p-4 transition-all duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between pr-3 sm:px-2">
          {/* Sidebar Logo */}
          {/* <Link href="/"> */}
          <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
            <span
              className={`${
                sidebarExpanded ? "lg:hidden" : "block"
              }  welcome-step text-2xl font-medium tracking-tighter text-black focus:outline-none focus:ring whitespace-nowrap cursor-pointer`}
            >
              <Image
                className="mt-2 mb-8 h-100 w-32"
                // src="/openai.png"
                src="/Marketplace_logo_black.png"
                height={32}
                width={300}
                alt="logo"
              />
            </span>
          </button>
          

          {/* Sidebar Icon (Collapsed) */}
           <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
          <div className= {`${
                !sidebarExpanded ? "lg:hidden" : "block"
              } mt-1 mb-8 h-8 w-8 flex items-center justify-center py-1`}>
          {/* // "flex items-center justify-center h-screen mt-1 py-1"> */}
            <div className="space-y-2">
              <div className="w-6 h-0.5 bg-gray-800"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
            </div>
          </div>
          </button>
          {/* </Link> */}
        </div>

        {/* Links */}
        <div className="space-y-4">
         
          <ul className="space-y-2">
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  <BiHomeAlt />
                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                    Home
                  </span>
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
               
                  <TbWorld />
                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                    My Network
                  </span>
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  
                  <PiBankLight />
                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                    Resource Bank
                  </span>
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">

                  <BsListTask />
                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                    Programs
                  </span>
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                 
                  <MdOutlineWorkOutline />
                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                    Jobs
                  </span>
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  
                  <IoGiftSharp />
             
                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                    Special Initiatives
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="mt-auto">
          <div className="flex-1" />
          <div className="px-2 py-2 justify-center">
          {/* <div> */}
          <ul>
          <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  
                  {/* <IoGiftSharp /> */}
                  <Image 
                  className="rounded-full bg-white"
                  src="/profilepic1.jpg"
                  alt="profile pic"
                  height={15}
                  width={40}/>

             
                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                    Kenneth
                  </span>
                </span>
              </Link>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}