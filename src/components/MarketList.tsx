// "use client";

// import ProductCard from './ProductCard';
// import { Product } from '@/lib/types';
// // import Banner from './Products/BarCategory';
// import { useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Link from 'next/link';

// interface Props {
//   title: string;
//   products: Product[]; // All products will be passed to this component
//   categoryId: number;
// }

// const MarketList = ({ title, products, categoryId }: Props) => {

//   console.log("categoryId", categoryId)
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const scrollAmount = scrollRef.current.clientWidth; // Scroll width of the container
//       scrollRef.current.scrollBy({
//         left: direction === 'right' ? scrollAmount : -scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4 w-[900px]">
     
//         <Link href={`/category/${categoryId}`} className='bg-blue-900 text-white'>
//           <div className='flex justify-between items-center h-10 border-2 border-white px-4 md:px-6 lg:px-8 w-full max-w-[900px] mx-auto'>
//             <span className='text-sm md:text-base lg:text-lg font-semibold hover:underline'>{title}</span> 
//                 <p className='flex flex-row space-x-2 items-center text-sm md:text-base lg:text-lg cursor-pointer'>Show All</p>
//           </div>
//         </Link>

//       <div className="relative w-[900px] overflow-hidden scrollbar-hide"> {/* Added overflow-hidden */}
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow hover:bg-gray-200 transition"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <div
//           ref={scrollRef}
//           className="flex gap-2 overflow-x-auto scrollbar-hide" // Maintain overflow-x-auto for horizontal scrolling
//           style={{ maxWidth: 'calc(25% * 5)'}} // Limit to 3 products visible at a time, add maxHeight
//         >
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow hover:bg-gray-200 transition"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MarketList;

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