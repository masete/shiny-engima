"use client";
import { verifyOtp } from '@/app/services/authService'; // Renamed import
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";

const OtpComponent = () => {
  // const [Val1, setVal1] = useState('');
  // const [Val2, setVal2] = useState('');
  // const [Val3, setVal3] = useState('');
  // const [Val4, setVal4] = useState('');
  // const [error, setError] = useState('');
  // const router = useRouter();

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('Submitting OTP Values'); // Debugging line

  //   try {
  //     const response = await verifyOtp(Val1, Val2, Val3, Val4); // Correct function call
  //     console.log('Login successful:', response);
  //     router.push('/dashboard');
  //   } catch (error) {
  //     console.error('Login error:', error); // Debugging line
  //     setError((error as Error).message);
  //   }
  // };

  return (
    <>
      <div className="w-full h-screen flex items-start">
        <div className="hidden lg:flex relative w-3/5 h-full flex-col bg-gradient-to-tr from-purple-400 to-green-400">
          <div className='h-full w-full object-contain'>
            <div className="absolute top-[20%] left-[10%] flex items-center justify-center flex-col text-white z-10">
              <h3 className="text-sm font-normal text-white">Welcome To</h3>
              <Image
                src="/Marketplace_logo_white.png"
                alt='white-logo'
                height={100}
                width={280}
              />
              <div className="font-bold text-white mt-6">EQUIP</div>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <div className="text-base text-white font-normal flex flex-col items-center">
                <p>Equip believers with tailored biblical based knowledge</p>
                <p>and skills that adequately address different</p>
                <p>areas of societal brokenness</p>
              </div>
              <p className="mt-40 text-white text-xs">A Ministry Of Watoto Church</p>
            </div>
          </div>
          <div className='absolute inset-0 bg-gray-900 bg-opacity-75 text-white'></div>
          <img src="/background.jpeg" className="w-full h-full absolute object-cover mix-blend-overlay" />
        </div>

        <div className="w-2/5 sm:w-5/5 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
          <Image
            alt='logo'
            src="/Marketplace_logo_black.png"
            height={80}
            width={150}
          />

          <div className='w-full flex flex-col max-w-[800px] sm:w-full'>
            <div className='w-full flex flex-col mb-2'>
              <h3 className='text-1xl font-semibold mb-2'>Verify OTP</h3>
            </div>

            <form>
              <div className='w-full flex flex-row space-x-1 items-center justify-center'>
                <input
                  type='text'
                  placeholder='0'
                  // value={Val1}
                  // onChange={(e) => setVal1(e.target.value)}
                  required
                  className='w-[30px] text-black border border-gray-400 bg-white px-4 py-1 my-3 outline-none focus:outline-none'
                />

                <input
                  type='text'
                  placeholder='0'
                  // value={Val2}
                  // onChange={(e) => setVal2(e.target.value)}
                  required
                  className='w-[30px] text-black border border-gray-400 bg-white px-4 py-1 my-2 outline-none focus:outline-none'
                />

                <input
                  type='text'
                  placeholder='0'
                  // value={Val3}
                  // onChange={(e) => setVal3(e.target.value)}
                  required
                  className='w-[30px] text-black border border-gray-400 bg-white px-4 py-1 my-3 outline-none focus:outline-none'
                />

                <input
                  type='text'
                  placeholder='0'
                  // value={Val4}
                  // onChange={(e) => setVal4(e.target.value)}
                  required
                  className='w-[30px] text-black border border-gray-400 bg-white px-4 py-1 my-2 outline-none focus:outline-none'
                />
              </div>

              <p className='text-sm whitespace-nowrap font-medium cursor-pointer underline underline-offset-2'>Resend OTP</p>

              <div className='w-full flex flex-col my-2'>
                <button type="submit" className='w-full text-white my-1 bg-black/80 font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
                  Verify
                </button>
              </div>
            </form>
          </div>

          <p className='py-4'>Already have an account? <span className='font-bold text-lg text-orange-600'><a href='/login'>Log In</a></span></p>
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(OtpComponent), { ssr: false });
