"use client"; // Marks this as a Client Component

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Import useParams
import ProductCard from '@/components/ProductCard';
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
      <CatMotionBar/>
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


// // app/category/[categoryId]/page.tsx
// // app/category/[categoryId]/page.tsx


// "use client";

// import Link from "next/link";
// import { useGetProductsCategoriesQuery } from "@/state/api";
// import { usePathname } from "next/navigation";

// const CatMotionBar = () => {
//   const { data: categories, isLoading, isError } = useGetProductsCategoriesQuery();
//   const pathname = usePathname(); // Get the current path

//   return (
//     <div className="w-full bg-gray-100 mb-4">
//       <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 py-2 whitespace-nowrap">
//         {/* All Category */}
//         <Link
//           key="all"
//           href="/"
//           className={`px-2 py-1 rounded-lg shadow-sm transition-all duration-300 ${
//             pathname === "/" ? "bg-blue-600 text-white" : "bg-white text-gray-800 hover:bg-gray-200"
//           }`}
//         >
//           All
//         </Link>

//         {/* Loading/Error States */}
//         {isLoading && <span className="text-sm text-gray-600">Loading...</span>}
//         {isError && <span className="text-sm text-red-500">Failed to load categories</span>}

//         {/* Dynamic Categories */}
//         {categories?.map((category) => {
//           const fullSlug = `${category.id}_${category.name}`;
//           const categoryPath = `/category/${fullSlug}`;
//           const isActive = pathname === categoryPath;

//           return (
//             <Link
//               key={category.id}
//               href={categoryPath}
//               className={`px-2 py-1 rounded-lg shadow-sm transition-all duration-300 ${
//                 isActive ? "bg-blue-600 text-white" : "bg-white text-gray-800 hover:bg-gray-200"
//               }`}
//             >
//               {category.name}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CatMotionBar;
