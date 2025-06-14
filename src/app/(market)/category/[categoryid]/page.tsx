"use client"; // Marks this as a Client Component

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Import useParams
import ProductCard from '@/components/Products/ProductCard';
import { Product } from '@/lib/types';
import Link from 'next/link';
import CatMotionBar from '@/components/Products/CatMotionBar';

const CategoryPage = () => {
  const { categoryid } = useParams(); // Access the dynamic route parameter
  let category = categoryid.toString();
  const categoryIndex = category.indexOf("_"); 
  const catId = category.substring(0, categoryIndex); // Extract ID
  const title = decodeURIComponent(category.substring(categoryIndex + 1)); 
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (catId) {
      // console.log("Fetching products for category ID:", catId);

      const fetchProductsByCategory = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/get-service-or-product-by-category`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify({ category_id: Number(catId) }),
            }
          );

          if (!response.ok) {
            console.error("Failed to fetch products. Status:", response.status);
            return;
          }

          const data = await response.json();
          // console.log("Full response data:", data); 

          // Check if data is an array
          if (Array.isArray(data)) {
            // console.log("Products array fetched yes:", data); 
            setProducts(data); // Set products directly
          } else {
            console.warn("Expected an array but received:", data);
            setProducts([]); // Set an empty array if the data is not as expected
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProductsByCategory();
    }
  }, [categoryid]);

  // console.log("Products data-> prdts fetched:", products);

  return (
    <div className="flex flex-col items-center">
      {/* <CatMotionBar/> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-2">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;