// import Image from 'next/image';
// import Link from 'next/link';
// import { Product } from '@/lib/types';
// import { truncateText } from '@/utils/truncateText';

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard = ({ product }: ProductCardProps) => {
//   return (
//     <Link href={`/product/${product.id}`}>
//       <div className="w-[200px] h-[240px] border border-gray-300 rounded-tl-[5px] bg-[#FEFEFE] p-4 shadow hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
//         {/* Product Image */}
//         <div className="h-[150px] flex items-center justify-center">
//           <Image
//             src={product.image_link}
//             alt={product.heading}
//             width={90}
//             height={90}
//             className="object-contain h-full rounded-md"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="mt-2 flex flex-col items-center">
//           <h3 className="text-sm font-medium text-gray-800 text-center line-clamp-2">
//             {truncateText(product.heading, 40)}
//           </h3>
//           <p className="text-sm font-bold text-blue-600 mt-2">
//             UGX {product.price.toFixed(2)}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { truncateText } from '@/utils/truncateText';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="w-[160px] h-[200px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px] lg:w-[200px] lg:h-[240px] xl:w-[200px] xl:h-[240px] border border-gray-300 rounded-tl-[5px] bg-[#FEFEFE] p-2 sm:p-3 md:p-4 shadow hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
        {/* Product Image */}
        <div className="h-[100px] sm:h-[120px] md:h-[150px] flex items-center justify-center">
          <Image
            src={product.image_link}
            alt={product.heading}
            width={90}
            height={90}
            className="object-contain w-auto h-full rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="mt-1 sm:mt-2 flex flex-col items-center">
          <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center line-clamp-2">
            {truncateText(product.heading, 40)}
          </h3>
          <p className="text-xs sm:text-sm font-bold text-blue-600 mt-1 sm:mt-2">
            UGX {product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
