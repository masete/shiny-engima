"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { RxPerson } from "react-icons/rx";
import { GiShop } from "react-icons/gi";


const AuthForm = () => {
  const router = useRouter();


  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Left side (image with overlay text) */}
      <div className="hidden md:flex relative w-full md:w-3/5 h-full bg-gradient-to-tr from-purple-400 to-green-400">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-10 text-white">
          <Link href="/">
            <img
              src="/Marketplace_logo_white.png"
              alt="logo"
              className="mb-4"
              height={100}
              width={280}
            />
          </Link>
          <h2 className="text-4xl font-bold">EQUIP</h2>
          <div className="border-2 w-10 border-white inline-block my-4"></div>
          <p className="text-lg leading-relaxed">
            Equip believers with tailored biblical-based knowledge and skills
            that adequately address different areas of societal brokenness.
          </p>
          <p className="mt-20 text-sm">A Ministry of Watoto Church</p>
        </div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <img
          src="/background.jpeg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side (form) */}
      <div className="w-full md:w-2/5 h-full bg-gray-100 flex flex-col justify-center items-center px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <img
              src="/Marketplace_logo_black.png"
              alt="logo"
              className="mx-auto mb-4"
              height={80}
              width={150}
            />
            <h3 className="text-xm font-semibold">
                Register For An Account
            </h3>
          </div>

          <div className="flex flex-col items-center space-y-4">
            {/* <Link href="/buyer/register"> */}
            <Link href="/buyer/login">
                <button className="flex items-center px-6 py-3 bg-white text-black font-semibold border-[1px] border-gray-200 shadow-md space-x-4 hover:bg-blue-100 transition">
                    <div className="flex-shrink-0">
                    {/* Replace with your actual icon */}
                        <RxPerson size={32} />
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold text-xl">Individual</h4>
                        <h6 className="text-sm mt-1 text-gray-500">Buy, Learn & Network with people</h6>
                    </div>
                </button>
            </Link>
            {/* <Link href="/vendor/vsignup"> */}
            <Link href="/vendor/vlogin">
                <button className="flex items-center px-6 py-3 bg-white text-black font-semibold border-[1px] border-gray-200 shadow-md space-x-4 mt-3 hover:bg-blue-100 transitio">
                    <div className="flex-shrink-0">
                    {/* Replace with your actual icon */}
                        <GiShop size={32}/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold text-xl">Vendor</h4>
                        <h6 className="text-sm mt-1 text-gray-500">Buy, Learn & Network with people</h6>
                    </div>
                </button>
            </Link>
            </div>

          <p className="text-center mt-6">

              <Link href="/login">
                Already have an account?{" "}
                <span className="text-blue-600 font-semibold">Log In</span>
              </Link>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
