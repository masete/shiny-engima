"use client";
import React, { useEffect, useState } from 'react';  // Add this import
import { verifyOtp } from '@/app/services/authService'; // Renamed import
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";

// Main OTP Component
const OtpComponent = () => {
  const [Val1, setVal1] = useState('');
  const [Val2, setVal2] = useState('');
  const [Val3, setVal3] = useState('');
  const [Val4, setVal4] = useState('');
  const [Val5, setVal5] = useState('');
  const [Val6, setVal6] = useState('');
  const [userId, setUserId] = useState("");
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("user_id");
    console.log("user_id otp", storedUserId)
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.error("No user_id found in sessionStorage");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) return;
    try {
      const response = await verifyOtp(Val1, Val2, Val3, Val4, Val5, Val6, userId);
      router.push('/');
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, nextInput: React.RefObject<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (/[^0-9]/.test(value)) return; // Ensure only numbers are entered
    switch (name) {
      case 'Val1': setVal1(value); break;
      case 'Val2': setVal2(value); break;
      case 'Val3': setVal3(value); break;
      case 'Val4': setVal4(value); break;
      case 'Val5': setVal5(value); break;
      case 'Val6': setVal6(value); break;
    }
    // Move to next input if value is entered
    if (value && nextInput.current) {
      nextInput.current.focus();
    }
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-between">
      <div className="hidden lg:flex relative w-3/5 h-full bg-gradient-to-tr from-purple-400 to-green-400">
        <div className="absolute top-[20%] left-[10%] flex items-center justify-center flex-col text-white z-10">
          <Image src="/Marketplace_logo_white.png" alt="white-logo" height={100} width={280} />
          <div className="font-bold text-white mt-6 text-2xl">EQUIP</div>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <div className="text-base text-white font-normal flex flex-col items-center">
            <p>Equip believers with tailored biblical based knowledge</p>
            <p>and skills that adequately address different</p>
            <p>areas of societal brokenness</p>
          </div>
          <p className="mt-40 text-white text-xs">A Ministry Of Watoto Church</p>
        </div>
      </div>

      <div className="w-full lg:w-2/5 h-full bg-[#f5f5f5] flex flex-col p-8 justify-between items-center">
        <Image alt="logo" src="/Marketplace_logo_black.png" height={80} width={150} />
        <div className="w-full flex flex-col max-w-[800px] sm:w-full">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-2xl font-semibold mb-4">Verify OTP</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-row space-x-2 md:space-x-3 items-center justify-center mb-4">
              {/* OTP Inputs */}
              {[Val1, Val2, Val3, Val4, Val5, Val6].map((val, index) => {
                const nextInput = React.createRef<HTMLInputElement>();
                return (
                  <input
                    key={index}
                    type="text"
                    name={`Val${index + 1}`}
                    value={val}
                    onChange={(e) => handleInputChange(e, nextInput)}
                    maxLength={1}
                    required
                    className="w-[50px] sm:w-[60px] h-[50px] text-center text-black border border-gray-400 bg-white px-4 py-2 my-2 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="0"
                    ref={nextInput}
                  />
                );
              })}
            </div>

            <p className="text-sm font-medium cursor-pointer underline underline-offset-2 mb-4">Resend OTP</p>

            <div className="w-full flex flex-col my-2">
              <button type="submit" className="w-full text-white my-1 bg-black/80 font-semibold rounded-md p-3 text-center flex items-center justify-center cursor-pointer">
                Verify
              </button>
            </div>
          </form>
        </div>

        <p className="py-4 text-sm">Already have an account? <span className="font-bold text-lg text-orange-600"><a href="/login">Log In</a></span></p>
      </div>
    </div>
  );
};

// Default export to avoid the error
export default OtpComponent;
