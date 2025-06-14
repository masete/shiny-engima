"use client";

import ProductCard from './Products/ProductCard';
import { Product } from '@/lib/types';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  title: string;
  products: Product[];
  categoryId: number;
}

const MarketList = ({ title, products, categoryId }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'right' ? 200 : -200; // Smaller, more controlled scroll amount
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      <Link href={`/category/${categoryId+'_'+title}`}>
        <div className="flex justify-between items-center h-8 sm:h-10 bg-blue-900 text-white px-3 sm:px-4 md:px-6 w-full rounded-sm">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:underline truncate">
            {title}
          </span>
          <p className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base cursor-pointer">
            Show All
          </p>
        </div>
      </Link>

      <div className="relative w-full overflow-hidden">
        {/* Only show scroll buttons on larger screens and if there are enough products */}
        {products.length > 3 && (
          <>
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-md hover:shadow-lg transition items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-md hover:shadow-lg transition items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{
            scrollSnapType: 'x mandatory',
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none scroll-snap-align-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketList;