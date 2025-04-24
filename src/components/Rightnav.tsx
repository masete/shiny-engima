'use client'

import React, { useState, ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Notifications from "./Notifications/page";
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { BsShop } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { ArrowUpWideNarrow, Bookmark, Plus, ShoppingCart } from 'lucide-react';
import Button from "./Button";
import { IconBaseProps } from "react-icons/lib";

interface User {
  full_name: ReactNode;
  email: string;
  username: string;
  // favorites: number[];
}


// Define the Sidenav component
export default function Rightnav({ sidebarOpen, setSidebarOpen }: any) {
  // Define state for sidebar expansion
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getUser = async () => {
          const token = sessionStorage.getItem('access_token');
          console.log('token', token)
        
          if (!token) {
            console.warn('User is not authenticated');
            setLoading(false);
            return;
          }
        try {
          const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
          const endpoint = "/auth/user/me";
          // Fetch the user data using the bearer token
          const res = await fetch(`${baseUrl}${endpoint}`, {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            
            },
          });
    
          if (!res.ok) {
            throw new Error('Failed to fetch user data');
          }
    
          const data: User = await res.json();
          setUser(data);
          return res;
          
          // console.log(data);
        } catch (error: any) {
          console.error('Failed to fetch user data:', error);
          throw new Error(error.response?.data?.message || 'Failed to fetch user data');
        } finally {
          setLoading(false); // Stop loading
        }
    
      };
    
      getUser();
    }, []); // Empty dependency array means this runs once when the component mounts
    

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
    <div>
        <div className="mb-4 ml-3 gap-2 md:gap-6 flex flex-wrap items-center bg-gray-100 pt-2">
              <div className="flex items-center space-x-4">
                  <Bookmark size={20} className="text-black hover:text-blue-500 cursor-pointer" />
                  {/* <ArrowUpWideNarrow size={20} className="text-gray-600 hover:text-blue-500 cursor-pointer" /> */}
                  <FaRegHeart size={20} className="text-black hover:text-blue-500 cursor-pointer"/>
                  <Link href={'/cart'}>
                    <ShoppingCart size={20} className="text-black hover:text-blue-500 cursor-pointer" />
                  </Link>
                  <Link href={'/topVendors/portfolio'} >
                    <BsShop className="text-bold" />
                  </Link>
                  
        
              </div>

              {/* Bookmark Icons */}
              <Link href="/option">
                    <div className="flex items-center justify-center w-full"> 

                 {loading ? (
                  <p>---</p> // Loading state
                    ) : user ? (

                      <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  
                                  <img 
                                  className="rounded-full bg-white"
                                  src="/profilepic1.jpg"
                                  alt="profile pic"
                                  height={15}
                                  width={40}/>

                            
                                  <span
                                    className={
                                      `
                                      ${
                                      // !isSidebarExpanded
                                        // ? "lg:hidden opacity-0 ml-0"
                                        // : 
                                        "opacity-100 ml-3 block"
                                    }ml-3 font-bold whitespace-nowrap `}
                                  >
                                    {/* <p className='font-thin text-sm'>{user.full_name}</p> */}
                                  </span>
                      </span>
                        
                    ) : (
                            <div className='border-2 rounded-full'>
                              <img src="/user.svg" alt="User icon" width={35} height={35} className='border-2 border-white rounded-full bg-blue-900'/>
                            </div>
               )}
                   
                   </div>

                {/* <div className="cursor-pointer pl-2 hover:bg-gray-200 rounded-full">
                  <div className='border-2 rounded-full'>
                      <img src="/user.svg" alt="User icon" width={40} height={40} className='border-2 border-white rounded-full bg-blue-900'/>
                  </div>
                </div> */}
              </Link>
           
            </div>
    
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed inset-0 border-r border-gray-200 no-scrollbar sm:translate-x-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`fixed flex flex-col z-40 right-0 lg:static lg:right-auto lg:top-auto lg:translate-x-0 h-screen no-scrollbar lg:w-64  w-72 bg-[#EFEFEF] lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 sm:translate-x-0 p-4 transition-all duration-200${
          sidebarOpen ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        {/* RightSidebar header */}
        {/* <div className="flex justify-between pr-3 sm:px-2 no-scrollbar"> */}
         
          

          {/* Sidebar Icon (Collapsed) */}
           {/* <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
          <div className= {`${
                !sidebarExpanded ? "lg:hidden" : "block"
              } mt-1 mb-8 h-8 w-8 flex items-center justify-center py-1`}> */}
          {/* // "flex items-center justify-center h-screen mt-1 py-1"> */}
            {/* <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-800"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
            </div>
          </div>
          </button> */}
          {/* </Link> */}
        {/* </div> */}

        {/* Links */}
        <div className="space-y-1">
         
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <Image
                  src="/cell.jpeg"
                  alt="find a cell"
                  height={80}
                  width={220}
                  className="border"
                  />
                
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-start justify-start border p-2 text-base text-gray-900 rounded-lg bg-slate-50 hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-start text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
               
                  {/* <TbWorld /> */}
                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                      <p className="items-start justify-start text-sm">Messages</p>
                      <div className="items-center py-6">
                        <Notifications/>  
                      </div>
                      
                  </span>
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 border rounded-lg bg-slate-50 hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  
                  {/* <PiBankLight /> */}
                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                    <p className="text-sm">Notifications</p>
                    <div className="items-center py-6">
                      <Notifications/>  
                    </div>
                  </span>
                </span>
              </Link>
            </li>

            {/* <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 border rounded-lg bg-slate-50 hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">

                  {/* <BsListTask /> */}
                  {/* <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                    <p className="text-sm">Upcoming Events</p>
                    <div className="items-center py-6">
                        <Notifications/>  
                      </div> */}
                  {/* </span>
                </span>
              </Link> */}
            {/* </li>  */}
            

            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 border rounded-lg bg-slate-50 hover:bg-gray-100  font-light hover:font-semibold"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  
                  {/* <IoGiftSharp /> */}
             
                  <span
                    className={`${
                      sidebarExpanded
                        ? "lg:hidden opacity-0 ml-0"
                        : "opacity-100 ml-3 block"
                    }ml-3 font-bold whitespace-nowrap `}
                  >
                    <p className="text-sm">My Job Alerts!</p>
                    <div className="items-center py-6">
                        <Notifications/>  
                      </div>
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
