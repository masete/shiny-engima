"use client"

import BarTopVendors from '@/components/Products/BarTopVendors'
import Link from 'next/link'
import { Product } from '@/lib/types';
import { FaPlus } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import CreateProductModal from '@/components/Products/CreateProductModal'
import { useState } from 'react';
import { products } from '@/utils/products';
import ProductCard from '@/components/Products/ProductCard';


const Mystore = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const fetchProduct = async (productid: string): Promise<Product> => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/ business-configuration/get-my-store
`,
          {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ id: productid }),
        });
    
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        return data as Product;
      } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
      }
    };
    
   
    // const handleCreateProduct = (product: { name: string; price: string }) => {
    //     console.log('Product Created:', product);
    //     // Here you can add your logic to handle the created product, e.g., send it to an API
    //   };

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
            <div className='flex flex-row'>
                <div>
                        <img src='/assets/hero.png' width={100} height={50}/>
                    </div>
                        <div className='flex-row'>
                            <div><p>portfolio</p></div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-2">
                                    {Array.isArray(products) && products.map((product: Product) => (
                                    <Link key={product.id} href={`/products/${product.id}`}>
                                        <ProductCard product={product} />
                                    </Link>
                                    ))}
                            </div>
                            {/* <div></div> */}
                            </div>
                        </div>
                    <div>

                </div>
            </div>
    </div>
  )
}

export default Mystore