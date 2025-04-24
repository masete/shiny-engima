import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const HomeBanner = () => {
  return (
    <div className='relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 h-[300px]'>
      <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly'>
        <div className='mb-8 md:mb-0 text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Summer Sale</h1>
            <p className='text-lg md:text-xl text-white mb-4'>Enjoy Discounts On Selected Sales</p>
            <p className='text-2xl md:text-5xl text-yellow-400 font-bold'>Get 50% OFF</p>
            <div className='flex items-center justify-center'>
            {/* <Link className="bg-red-600 text-white rounded-full p-2" href="/market/public">
            <button>Marketplace</button>
          </Link> */}
                <Link href="/market/public">
                <button className='flex items-center justify-center text-white py-2 bg-red-600 rounded-full w-[120px]'>
                    <CiShoppingCart className='text-white text-xl font-extrabold mr-2'/>
                    Buy now
                </button>
                </Link>
                
            </div>

        </div>
        <div className='relative w-1/3 aspect-video '>
            <Image src="/banner-image.png" alt='Banner Image' fill className='object-contain'/>
          
            
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
