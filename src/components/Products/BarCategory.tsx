"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useGetProductsCategoriesQuery } from "@/state/api"; // Adjust the path if needed

interface BannerProps {
  categoryId: number;
  showAllText?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  showChevron?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  categoryId,
  showAllText = "Show All",
  bgColor = "#012F6B",
  textColor = "white",
  borderColor = "white",
  showChevron = true,
}) => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetProductsCategoriesQuery();

  // Find the category by ID
  const category = categories?.find((cat) => cat.id === categoryId);

  const title = category?.name ?? "Category";

  return (
    <div
      className={`flex justify-between items-center h-12 border-2 border-white px-4 md:px-6 lg:px-8 w-full max-w-[900px] mx-auto`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
      }}
    >
      <Link
        href={`/category/${categoryId}`}
        className="text-sm md:text-base lg:text-lg font-semibold hover:underline"
      >
        {isLoading
          ? "Loading..."
          : isError
          ? "Failed to load category"
          : title}
      </Link>

      {showAllText && (
        <h6 className="flex flex-row space-x-2 items-center text-sm md:text-base lg:text-lg cursor-pointer">
          {showAllText}
          {showChevron && (
            <ChevronRight size={16} className="stroke-foreground" />
          )}
        </h6>
      )}
    </div>
  );
};

export default Banner;
