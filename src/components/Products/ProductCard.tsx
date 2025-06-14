import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { truncateText } from '@/utils/truncateText';
import { useCart } from '@/hooks/useCart';
import { useEffect, useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {handleAddProductToCart, cartProducts} = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false)

    useEffect(()=>{
      setIsProductInCart(false)
  
      if (cartProducts){
        const existingIndex = cartProducts.findIndex((item)=>item.id ===product?.id)
    
        if(existingIndex > -1){
          setIsProductInCart(true)
        }
      };
    },[cartProducts])
  
  console.log("use cart", cartProducts)
    if (!product) return <div>Loading...</div>;
  return (
    <div className="group relative w-[160px] h-[200px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px]
      lg:w-[200px] lg:h-[240px] border border-gray-200 rounded-tl-[5px] bg-[#FEFEFE]
      p-2 sm:p-3 md:p-4 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300
      ease-in-out transform flex flex-col justify-between">

      <Link href={`/product/${product.id}`} className="flex flex-col h-full justify-between">
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
      </Link>

      {/* Add to Cart Button - Top Right Corner on Hover */}
      <button
        className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100
        transition-opacity duration-300 text-[10px] px-2 py-0.5 rounded-md
        ${isProductInCart
          ? "text-orange-500 border border-orange-500 cursor-not-allowed"
          : "text-blue-600 border border-blue-600 bg-transparent"}`}
        onClick={() => {
          if (!isProductInCart) {
            handleAddProductToCart(product);
          }
        }}
      >
        {isProductInCart ? "In Cart" : "Add to Cart"}
      </button>

    </div>
  );
};

export default ProductCard;
