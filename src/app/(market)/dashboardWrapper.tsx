"use client";

import "../globals.css";
import { useState, useEffect, useRef } from "react";
// import { Toaster } from "react-hot-toast";
import CartProvider from "../../../providers/CartProvider";
import Navbar from "@/components/Navbar/NavbarMKT";
// import Rightnav from "@/components/Rightnav";
import SideNav from '@/components/SideNav/side-nav'
import StoreProvider from "../redux";


const DashboardLayout = ({ children }: { children: React.ReactNode }) =>{
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollableElement = contentRef.current;

    const handleScroll = () => {
      if (scrollableElement) {
        setIsScrolled(scrollableElement.scrollTop > 0);
      } else {
        setIsScrolled(window.scrollY > 0);
      }
    };

    scrollableElement?.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


return (
  <html lang="en" className="!scroll-smooth bg-gray-100" >
    {/*bg-[#EFEFEF]*/}
    <body>
        {/* <Toaster
          toastOptions={{
            style: {
              background: "rgb(0, 100, 0)",
              color: "#fff",
            },
          }}
        /> */}
        <CartProvider>
          <div className="relative flex h-screen">
            {/* Sidebar */}
            <div className="hidden lg:block fixed top-0 left-0 h-screen w-16 bg-white shadow-lg z-30">
              <SideNav />
            </div>

            {/* Main Content */}
            <div
              ref={contentRef}
              className={`flex-1 w-full overflow-y-auto scrollbar-hidden relative ${
                isMobileMenuOpen ? "overflow-hidden" : ""
              } lg:ml-16 lg:mr-5`}
            >
              {/* Navbar */}
              <div
                className={`sticky top-0 z-20 transition-all ${
                  isScrolled ? "bg-[#EFEFEF]" : "bg-transparent"
                }`}
              >
                <Navbar
                  onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  isMobileMenuOpen={isMobileMenuOpen}
                />
              </div>

              {/* Mobile Menu Overlay */}
              {isMobileMenuOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              )}

              {/* Mobile Navigation Menu */}
              <div
                className={`fixed top-0 left-0 h-screen w-full bg-white transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
                  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <SideNav />
              </div>

              {/* Content */}
              <div className="p-4">{children}</div>
            </div>

            {/* Rightnav - Commented out */}
            {/* <div className="hidden lg:block fixed top-0 right-0 h-screen w-60 bg-white shadow-lg z-30">
              <Rightnav />
            </div> */}
          </div>
        </CartProvider>
    </body>
  </html>
);
}


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <StoreProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </StoreProvider>
    );
  };
  
export default DashboardWrapper;