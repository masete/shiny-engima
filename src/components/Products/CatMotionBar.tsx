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

