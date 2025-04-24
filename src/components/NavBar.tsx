'use client'

import Image from "next/image";
import { NAV_LINKS } from "@/constants"
// import Logo from "../../../public/assets/Logo.svg";
// import User from "../../../public/assets/User.svg";
import Link from "next/link";
import Menu from "../../public/assets/Menu.svg";
import { useEffect, useState } from "react";
import classNames from 'classnames';
import { usePathname } from 'next/navigation'; // Import the hook


export function Navbar() {
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const pathname = usePathname(); // Get the current path

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
  
    <nav className={classNames(
      "flex w-full sticky top-0 z-40 items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20",
      {
        "bg-blue-400 text-white": isScrolled,
        "bg-gray-100": !isScrolled,
      }
    )}>
      <div className="flex items-center">
        <div>
          <a href="/">
          <Image
          src={isScrolled ? "/svg/marketplace_logo_white.svg" : "/svg/marketplace_logo_black.svg"}
          alt="logo"
          width={150}
          height={100}
          className="hidden md:block"
          />

          <Image
          src={Menu}
          alt="menu"
          className="block md:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
          />
          
          </a>
          {dropdownMenu && (
          <div className="dropdown-menu">
            <Link href="/">Home</Link>
            <Link href="/my-list">My List</Link>
            {/* <a onClick={handleLogout}>Log Out</a> */}
          </div>
        )}
          
        </div>
      


        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} 
            className={classNames(
              `regular-16 content-center cursor-pointer pb-1.5 transition-all hover:font-bold`,
              {
                'text-white': isScrolled,
                'text-black': !isScrolled,
                'font-bold underline text-yellow-500': pathname === link.href, // Highlight the active link
              }
            )}
            // className={`regular-16 content-center cursor-pointer pb-1.5 transition-all ${
            //   isScrolled ? 'text-white' : 'text-black'
            // } hover:font-bold`}
            >
            {link.label}
          </Link>
          ))}
          <Link className="bg-blue-950 text-white rounded-sm p-2" href="/">
            <button>Marketplace</button>
          </Link>
        
        </div>
      </div>

     
    </nav>
  );
}