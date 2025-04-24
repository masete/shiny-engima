"use client"

import BarTopVendors from '@/components/Products/BarTopVendors'
// import { Selection } from '@/components/Products/Selection'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaEdit, FaPlus } from 'react-icons/fa'
import { FcRating } from 'react-icons/fc'
import { MdOutlineMailOutline, MdOutlinePhone } from 'react-icons/md'
import CreateProductModal from '@/components/Products/CreateProductModal'

const Mystore = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleCreateProduct = (product: { name: string; price: string }) => {
        console.log('Product Created:', product);
        // Here you can add your logic to handle the created product, e.g., send it to an API
      };

  return (
    <div className='mx-10'>
        {/* <Selection/> */}
        <div className='pt-1'>
           <BarTopVendors title='My Store' showChevron={false} showAllText='' bgColor='#012F6B' /> 
        </div>
        
        <div className="relative bg-white h-[160px] my-2 p-4">
                    {/* Profile Information */}
                    <div className="flex space-x-4">
                        <div>
                        <img
                            src="/coursel/profilepic1.jpg"
                            width={100}
                            height={50}
                            className="rounded-full"
                            alt="Profile"
                        />
                    </div>
                    <div className="pt-6">
                    <p className="text-sm font-bold">
                        Jonathan | <span className="font-thin text-sm">Graphics Designer</span>
                    </p>
                    <h6 className="text-sm">I create amazing things</h6>
        
                    <div className='mt-4'>
                        <div className='flex items-center text-sm space-x-2'>
                           <FcRating />
                            <span>4.9 (37 Reviews)</span>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
        
                {/* Edit Section */}
                <div className="absolute top-4 right-4 flex items-center space-x-2 cursor-pointer">
                    <span>Edit</span>
                    <FaEdit />
                </div>
        
                {/* Buttons and Icons Section */}
                {/* <div className="mt-1"> */}
                    <div className="flex items-center space-x-4 justify-end">
                    <button className="bg-[#4BB3FD] text-white p-2 text-xs">Follow</button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center bg-[#4BB3FD] p-2 text-white text-xs space-x-2">
                        <FaPlus />
                        <span>Add Product</span>
                    </button>
                        <MdOutlineMailOutline size={30} />
                        <MdOutlinePhone size={30} />
                        <CreateProductModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            // onCreateProduct={handleCreateProduct}
                        />
                    </div>
                {/* </div> */}
                </div>
        <div className='flex justify-between bg-white h-8 p-1'>
            <Link href='/topVendors/mystore'><div>My Info</div></Link>
            <Link href='/topVendors/portfolio'><div>My Portfolio</div></Link>
            <Link href='/topVendors/myreviws'><div>My Reviws</div></Link>
            
        </div>
        <div className='bg-white my-2'>
            <h2 className='p-6 text-sm'>I am an art director, graphic designer, and web designer and I am dedicated to helping you 
                build an impactful brand. I provide premium visual identity work and logo designs that empower 
                ambitious businesses. I can deliver everything within the graphic design category such as print, 
                logos, visual profiles, brand guides as well as illustration and web design. My bespoke design
                 will show off what you´re all about, something we´re both proud of.</h2>

                 <div>
                    <h3>Skills</h3>
                    <ul className='text-sm p-6'>
                        <li>My Skills</li>
                        <li>Brand Style Guides</li>
                        <li>Business Cards & Stationery</li>
                        <li>Design Advice</li>
                        <li>Logo Design</li>
                    </ul>
                 </div>
        </div>
    </div>
  )
}

export default Mystore