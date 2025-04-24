import React, { useState } from "react";
import Link from "next/link";
import { Redressed } from "next/font/google";
import SearchBar from "../SearchBar";
import Profile from "../user/user_profile";
import { Menu } from "lucide-react"; // Icon for mobile menu

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
      <div className="flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="hidden md:block items-center">
          <Link
            href="/"
            className={`${redressed.className} font-bold text-2xl`}
          >
            <img
              src="/svg/marketplace_logo_black.svg"
              height={60}
              width={80}
              alt="Marketplace Logo"
              className="w-24 h-auto md:w-28"
            />
          </Link>
        </div>

        {/* Search Bar - Hidden on smaller screens */}
        <div className="hidden md:flex flex-1 ml-60">
          <SearchBar />
        </div>

        {/* Profile & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Profile />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200"
            onClick={onMenuClick}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar (Visible when menu is open) */}
      {isMobileMenuOpen && (
        <div className="block md:hidden px-4 py-2">
          <SearchBar />
        </div>
      )}
    </div>

    <div>
    <div className="flex items-center justify-center gap-4 text-black">
      <Link href="/">
        <div
          className={`cursor-pointer px-3 py-1 rounded-md text-center whitespace-nowrap ${
            selected === "products"
              ? "text-blue-500 font-medium"
              : "text-black hover:text-blue-500"
          }`}
          onClick={() => setSelected("products")}
        >
          <h6 className="text-xl font-bold sm:text-base">Products & Services</h6>
        </div>
      </Link>
      <span className="hidden sm:block text-gray-400">|</span> {/* Divider for better separation */}
      <Link href="/jobs">
        <div
          className={`cursor-pointer px-3 py-1 rounded-md text-center whitespace-nowrap ${
            selected === "jobs"
              ? "text-blue-500 font-medium"
              : "text-black hover:text-blue-500"
          }`}
          onClick={() => setSelected("jobs")}
        >
          <h6 className="text-xl font-bold sm:text-base">Available Jobs</h6>
        </div>
      </Link>
    </div>
    </div>
   

    </div>

  );
};

export default Navbar;

