import React, { useState } from "react";
import Link from "next/link";
import { Redressed } from "next/font/google";
import SearchBar from "../SearchBar";
import Profile from "../user/user_profile";
import { Menu } from "lucide-react"; // Icon for mobile menu
import CategoryBar from "@/components/Products/CatMotionBar";
import Image from "next/image";

interface NavbarProps {
  onMenuClick: () => void;
  isMobileMenuOpen: boolean;
}

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const Navbar = ({ onMenuClick, isMobileMenuOpen }: NavbarProps) => {
  const [selected, setSelected] = useState("products");
  return (
    <div>
    <div className="sticky top-0 w-full z-30 bg-gray-100">
      <div className="flex items-center justify-between px-4 md:px-4">
        {/* Logo */}
        <div className="hidden md:block items-center">
          <Link
            href="/"
            className={`${redressed.className} font-bold text-2xl`}
          >
            <Image
              src="/svg/marketplace_logo_black.svg"
              alt="Marketplace Logo"
              width={80}
              height={60}
              className="w-24 h-auto md:w-28"
              />
          </Link>
        </div>

         {/* Mobile Menu Button */}
         <button
            className="md:hidden p-1 rounded-full hover:bg-gray-200"
            onClick={onMenuClick}
          >
            <Menu size={24} />
          </button>

        {/* Search Bar - Hidden on smaller screens */}
        <div className="hidden md:flex flex-1 ml-60">
          <SearchBar />
        </div>

        {/* Profile & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Profile />
        </div>
      </div>

      {/* Mobile Search Bar (Visible when menu is open) */}
      {isMobileMenuOpen && (
        <div className="block md:hidden px-4 py-1">
          <SearchBar />
        </div>
      )}
    </div>

    {/* <div> */}
    <div className="w-full px-2 bg-gray-100">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-black">

         <div className="flex flex-row space-x-2">
            <Link href="/">
              <div
                className={`cursor-pointer px-2 py-0 rounded-md text-center ${
                  selected === "products"
                    ? "text-blue-500 font-semibold"
                    : "text-black hover:text-blue-500"
                }`}
                onClick={() => setSelected("products")}
              >
                <h6 className="text-sm font-bold">Products & Services</h6>
              </div>
            </Link>
                      <span className="hidden sm:block text-gray-400 text-sm">|</span>
            <Link href="/jobs">
              <div
                className={`cursor-pointer px-2 py-0 rounded-md text-center ${
                  selected === "jobs"
                    ? "text-blue-500 font-semibold"
                    : "text-black hover:text-blue-500"
                }`}
                onClick={() => setSelected("jobs")}
              >
                <h6 className="text-sm font-bold">Available Jobs</h6>
              </div>
            </Link>
          </div>

        </div>
                {selected === "products" && (
                    <div className="w-full px-4 sm:px-6 lg:px-8 sm:py-0">
                      <CategoryBar />
                    </div>
                  )}
            {/* <div className="w-full px-4 sm:px-6 lg:px-8 sm:py-0">
              <CategoryBar />
            </div> */}
       </div>
            
    </div>

  );
};

export default Navbar;

