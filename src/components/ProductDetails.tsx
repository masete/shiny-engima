// "use client"
// import { Rating } from '@mui/material';
// // import Product from '../market/public/[productid]/page';
// import { useCallback, useState } from 'react';
// import SetColor from './Products/SetColor';
// import SetQuantity from './Products/SetQuantity';
// import Button from './Button';
// import { IconBaseProps } from 'react-icons/lib';
// import ProductImages from './Products/ProductImages';
// import { Footer } from './Footer';
// import Navbar from './Navbar/NavbarMKT';
// import Link from 'next/link';
// import router from 'next/router';
// import { Selection } from './Products/Selection';
// import Banner from './Products/Bar';

// interface ProductDetailsProps{
//   product : any
// }

// export type CartProductType = {
//   id: string,
//   title: string,
//   description: string;
//   category: string;
//   quantity: number;
//   price: number;
//   selectedImg: SelectedImgType
// }

// export type SelectedImgType = {
//   color: string;
//   colorCode: string;
//   image: string
// }

// const Horizontal = () =>
//   {
//     return < hr className='w-[30%] my-2'/>
//   }



// const ProductDetails = ({product}: ProductDetailsProps) => {

//   const [CartProduct, setCartproduct] = useState<CartProductType>({
//     id: product.id,
//     title: product.title,
//     description: product.description,
//     category: product.category,
//     quantity: 1,
//     price: product.price,
//     selectedImg: {...product.image[0]}
//   })

//   const handleProductClick = () => {
//     const phoneNumber = '1234567890'; // Replace with your WhatsApp number
//     const message = `I'm interested in the ${product.name}`; // Customize your message
//     const encodedMessage = encodeURIComponent(message);

//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//     // Redirect to WhatsApp
//     // router.push(whatsappUrl);

//   };


//   // const productRating = 
//   // product.reviews.reduce((acc: Number, item: any) =>
//   //   item.rating + acc, 0 )/
//   // product.reviews.length;

//   const handleColorSelect = useCallback((value: SelectedImgType)=>{
//     setCartproduct((prev)=>{
//       return {...prev, selectedImg: value}
//     })
//   },[CartProduct.selectedImg])

// const handleQtyDecrease = useCallback(()=>{
//   // prevent negative qty
//   if(CartProduct.quantity === 1){
//     return;
//   }

//   setCartproduct((prev)=>{
//     return {...prev, quantity: --prev.quantity }
//   })
// }, [CartProduct]);
// const handleQtyIncrease = useCallback(()=>{ 
//   if(CartProduct.quantity === 6){
//   return;
// }


//   setCartproduct((prev)=>{
//     return {...prev, quantity: ++prev.quantity }
//   })
// }, [CartProduct]);

// // console.log(product);
// // console.log(product?.images);
//   // console.log(CartProduct)
//   return (
//     <div>
//     <div>
//       <Selection/> 
//     </div>

//     <div className='mx-6 my-4'>
//         <Banner 
//           title="Back" 
//           showAllText="" 
//           bgColor="#FFFFFF" 
//           textColor="#000" 
//           borderColor="#FFFFFF" 
//           showChevron={false}
//         />
//       </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10 mx-6 mt-1 bg-white">
      
//       <div>
//         <ProductImages cartProduct={CartProduct} product={product} handleColourSelect={handleColorSelect} />
//       </div>
//       <div className='flex flex-col gap-1 text-sm text-slate-700'>
//         <h2 className="text-xl font-semibold text-black">{product.title}</h2>

//         {/* <div className='flex items-center gap-2'>
//           <Rating value={productRating} readOnly />
//           <div>{product.reviews.length} :reviews</div>
//         </div> */}
//         <Horizontal />
//         <div className='text-justify'>{product.description}</div>

//         <div>
//           <span className='font-semibold text-slate-700'>CATEGORY :</span> {product.category}
//         </div>
//         <Horizontal />
//         <div>
//           <span className='font-semibold text-slate-700'>PRICE :</span> {product.price}
//         </div>
//         <Horizontal />
//         <SetColor CartProduct={CartProduct} images={product.image} handleColorSelect={handleColorSelect} />
//         <Horizontal />
//         {/* <SetQuantity cartProduct={CartProduct} handleQtyDecrease={handleQtyDecrease} handleQtyIncrease={handleQtyIncrease} /> */}
//         <Horizontal />
//         <div className='w-[300px]'>
//             <button className="bg-blue-950 text-white h-10 w-60 rounded-sm border-2 border-white">
//               Add to Cart
//             </button>
//         </div>

//       </div>


//     </div>
//       <Footer />
//     </div>
  
//   )
// }

// export default ProductDetails

"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { Selection } from '@/components/Products/Selection';
import Banner from '@/components/Products/Bar';
import { Footer } from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { MdCheckCircle } from 'react-icons/md' 
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

const Horizontal = () => <hr className='w-[30%] my-2' />;

interface ProductDetailsProps {
  params: {
    productid: string;
  };
}

// Fetch product data function
const fetchProduct = async (productid: string): Promise<Product> => {
  try {
    const res = await fetch('http://watotomarketplace.com/market-place/public/get-service-or-product-by-id', {
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
      <Selection />
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10 mx-6 mt-1 bg-white">
        <div className="flex-1">
          <Image 
            src={product.image_link} 
            alt={product.heading} 
            width={300} 
            height={400} 
            className="rounded-lg object-cover w-full h-auto" 
          />
        </div>
        
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
            <div className='w-[300px]'>
              <button className="bg-blue-950 text-white h-10 w-60 rounded-sm border-2 border-white" onClick={()=>handleAddProductToCart(product)}>
                Add to Cart
              </button>
            </div>
            </>}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;


