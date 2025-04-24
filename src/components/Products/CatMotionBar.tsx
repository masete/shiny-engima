// "use client";

// import Link from "next/link";
// import { useGetProductsCategoriesQuery } from "@/state/api";

// const CategoryBar = () => {
//   const { data: categories, isLoading, isError } = useGetProductsCategoriesQuery();

//   return (
//     <div className="w-full bg-gray-100">
//       <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 py-2 whitespace-nowrap">
//         {/* Static 'All' link */}
//         <Link
//           key="all"
//           href="/"
//           className="px-2 py-1 bg-white rounded-lg shadow-sm text-gray-800 hover:bg-gray-200 transition-all duration-300"
//         >
//           All
//         </Link>

//         {isLoading && (
//           <span className="text-sm text-gray-600">Loading...</span>
//         )}
//         {isError && (
//           <span className="text-sm text-red-500">Failed to load categories</span>
//         )}

//         {categories?.map((category) => (
//           <Link
//             key={category.id}
//             href={`/category/${encodeURIComponent(`${category.id}_${category.name}`)}`}
//             className="px-2 py-1 bg-white rounded-lg shadow-sm text-gray-800 hover:bg-gray-200 transition-all duration-300"
//           >
//             {category.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryBar;

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
//           const isActive = pathname.includes(fullSlug);

//           // const isActive = pathname === categoryPath;

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



"use client";

import Link from "next/link";
import { useGetProductsCategoriesQuery } from "@/state/api";
import { usePathname } from "next/navigation";

const CatMotionBar = () => {
  const { data: categories, isLoading, isError } = useGetProductsCategoriesQuery();
  const rawPathname = usePathname(); // e.g., "/category/3_Fish%20&%20Chips"
  const pathname = decodeURIComponent(rawPathname.toLowerCase());

  return (
    <div className="w-full bg-gray-100 mb-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 py-2 whitespace-nowrap">
        {/* All Category */}
        <Link
          key="all"
          href="/"
          className={`px-2 py-1 rounded-lg shadow-sm transition-all duration-300 ${
            pathname === "/" ? "bg-blue-600 text-white" : "bg-white text-gray-800 hover:bg-gray-200"
          }`}
        >
          All
        </Link>

        {/* Loading/Error States */}
        {isLoading && <span className="text-sm text-gray-600">Loading...</span>}
        {isError && <span className="text-sm text-red-500">Failed to load categories</span>}

        {/* Dynamic Categories */}
        {categories?.map((category) => {
          const fullSlug = `${category.id}_${category.name}`.toLowerCase(); // Make it lowercase
          const isActive = pathname.includes(fullSlug); // Now match works consistently

          return (
            <Link
              key={category.id}
              href={`/category/${encodeURIComponent(`${category.id}_${category.name}`)}`}
              className={`px-2 py-1 rounded-lg shadow-sm transition-all duration-300 ${
                isActive ? "bg-blue-600 text-white" : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CatMotionBar;

