"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';
import Banner from '@/components/Products/Bar';
import { Footer } from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { MdCheckCircle } from 'react-icons/md' 
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Horizontal = () => <hr className='w-[30%] my-2' />;

interface ProductDetailsProps {
  params: {
    productid: string;
  };
}

// Fetch product data function
const fetchProduct = async (productid: string): Promise<Product> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/get-service-or-product-by-id`,
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ id: productid }),
    });

    if (!res.ok) throw new Error('Failed to fetch product');
    const data = await res.json();
    return data as Product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  const {handleAddProductToCart, cartProducts} = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false)
  // const { cartTotalQty } = useCart(10);
  const [product, setProduct] = useState<Product | null>(null);

  const router = useRouter()

  useEffect(() => {
    // Fetch product when component mounts
    const getProduct = async () => {
      try {
        const fetchedProduct = await fetchProduct(params.productid);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error loading product:", error);
      }
    };

    getProduct();
  }, [params.productid]);

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
    <div>

      <div className='mx-6 my-4'>
        <Banner 
          title="Back" 
          showAllText="" 
          bgColor="#FFFFFF" 
          textColor="#000" 
          borderColor="#FFFFFF" 
          showChevron={false}
        />
      </div>

      <div className='p-10 mx-6 mt-1 bg-white'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="flex-1">
            <Image 
              src={product.image_link} 
              alt={product.heading} 
              width={200} 
              height={200} 
              className="rounded-lg object-cover w-full h-[300px]" 
            />
          </div>
          <div>
            <h3>{product.name}</h3>
            {/* <h3>{product.price}</h3> */}
            <h4>Vendor Name: Jonathan Ndaebwa</h4>
            <p>Rating : 4.0</p>
            <div className='flex items-center justify-between'>
              <Link href="/topVendors/portfolio" className="text-blue-600 underline hover:text-blue-800">Click here to visit the store</Link>  
            </div>
            <p>Location: kampala</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col gap-1 text-sm text-slate-700'>
            <h2 className="text-xl font-semibold text-black">{product.heading}</h2>
              <Horizontal />
            <div className='text-justify'>{product.details}</div>
              <Horizontal />
            <div>
              <span className='font-semibold text-slate-700'>PRICE :</span> {product.price}
            </div>
          
              <Horizontal />
            <div>
              {isProductInCart ? <>
              <p className='mb-2 text-slate-500 flex items-center gap-1'>
                <MdCheckCircle className='text-teal-400' size={20}/>
                <span>Product Already Added to Cart</span>
              </p>
              <div className='max-w-[300px]'>
                <button className="bg-white text-blue-950 border-2 border-blue-500 h-10 w-60 rounded-sm" onClick={()=>{
                router.push("/cart")
                }}>View Cart</button>
              </div>
            
              </> : <>
              <div className="w-full max-w-[300px]">
                <button
                  className="w-full bg-blue-950 text-white h-12 border-2 border-white hover:bg-blue-800 transition-all"
                  onClick={() => handleAddProductToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
              </>}
          </div>
        </div>
      </div>
        
       
      </div>
    
      
      <Footer />
    </div>
  );
};

export default ProductDetails;