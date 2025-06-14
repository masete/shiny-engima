"use client"

import BarTopVendors from '@/components/Products/BarTopVendors'
import Link from 'next/link'
import { Product } from '@/lib/types';
import { FaPlus, FaEdit } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import CreateProductModal from '@/components/Products/CreateProductModal'
import { useEffect, useState } from 'react';
import { products } from '@/utils/products';
import ProductCard from '@/components/Products/ProductCard';

const Mystore = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const token = localStorage.getItem('access_token');
    const token = sessionStorage.getItem('access_token');

    console.log("Access Token:", token);
    setLoading(true);

    if (!token) {
      console.error('No access token found in localStorage');
      setLoading(false);
      return;
    }

    const fetchStoreData = async () => {
      try {
        const res = await fetch('https://watotomarketplace.com/market-place/business-configuration/get-my-store', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const error = await res.json();
          console.error('Failed to fetch store:', error);
          setLoading(false);
          return;
        }

        const data = await res.json();

        // Adjust this based on your actual API response shape
        setProducts(data.products || []);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, []);

  // if (loading) return <p className="text-center">Loading products...</p>;

  // if (products.length === 0) return <p className="text-center">No products found for your store.</p>;


  return (
    <div className="px-4 sm:px-6 md:px-10">
      <div className="pt-1">
        <BarTopVendors title="My Store" showChevron={false} showAllText="" bgColor="#012F6B" />
      </div>

      {/* Profile Card */}
      <div className="relative bg-white mt-4 p-4 rounded-md shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
          <img
            src="/coursel/profilepic1.jpg"
            className="rounded-full w-24 h-24 object-cover mb-2 sm:mb-0"
            alt="Profile"
          />
          <div>
            <p className="text-sm font-bold">Jonathan | <span className="font-thin">Graphics Designer</span></p>
            <p className="text-sm">I create amazing things</p>
            <div className="mt-2 flex items-center text-sm space-x-2">
              <FcRating />
              <span>4.9 (37 Reviews)</span>
            </div>
          </div>
        </div>

        {/* Edit Icon */}
        <div className="absolute top-4 right-4 flex items-center space-x-2 cursor-pointer text-sm">
          <span>Edit</span>
          <FaEdit />
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap justify-end gap-2">
          <button className="bg-[#4BB3FD] text-white px-4 py-2 text-xs rounded">Follow</button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center bg-[#4BB3FD] px-4 py-2 text-white text-xs rounded gap-2"
          >
            <FaPlus />
            <span>Add Product</span>
          </button>
          <MdOutlineMailOutline size={24} className="text-gray-600" />
          <MdOutlinePhone size={24} className="text-gray-600" />
        </div>
        <CreateProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      {/* Nav Tabs */}
      <div className="flex justify-between items-center bg-white mt-4 p-2 text-sm flex-wrap gap-2">
        <Link href="/topVendors/mystore"><div className="cursor-pointer">My Info</div></Link>
        <Link href="/topVendors/portfolio"><div className="cursor-pointer">My Portfolio</div></Link>
        <Link href="/topVendors/myreviws"><div className="cursor-pointer">My Reviews</div></Link>
      </div>

      {/* Portfolio Section */}
      <div className="bg-white my-4 p-4 rounded-md">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <img src="/assets/hero.png" className="w-24 h-auto" alt="Hero" />
          <div className="flex flex-col justify-center">
            <p className="text-base font-medium">Portfolio</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(products) && products.map((product: Product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mystore
