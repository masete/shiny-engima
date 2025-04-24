// "use client";

// import { Product } from "@/lib/types";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/Navbar/NavbarMKT";


// export default function ProductTile({ product }: { product: Product }) {

//   const router = useRouter();
  
//   return (
//     <>
    
//     <div className="border-2 border-white rounded-xl w-[220px] h-[260px] bg-white"   onClick={()=>router.push(`/${product.id}`)}>
//       <div className="overflow-hideen aspect-auto h-[100px] w-[200px]">
//         <img
//           src={product.image}
//           alt="Product image"
//           className="h-full w-full rounded-xl object-cover transition-all duration-300 group-hover:scale-125"
//         />
//       </div>
//       <div >
//         <Link
//                 // onClick={() => setSidebarOpen(false)}
//               href="/jobs"
//                 className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-semibold"
//               >
//                 <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  hover:font-semibold">
                  
//                   <img
//                   className="rounded-full bg-white"
//                   src="/profilepic1.jpg"
//                   alt="profile pic"
//                   height={15}
//                   width={15}/>
                  
             
//                   <span className="opacity-100 ml-3 block whitespace-nowrap text-sm">
//                     Jonathan Ssebirumbi
//                     {/* <p className="text-sm">Graphics Designer</p> */}
//                   </span>
//                 </span>
//         </Link>
//               <p className="p-2 text-sm font-normal">{product.title}</p>
//       </div>
     
//       <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
//         <div className="mb-2 flex bottom-0">
//         {/* <ReactStars count={1} size={24} color2={'#ffd700'} /> */}
//                 <p className="bottom-0 font-light text-sm">From UGX {'  '}</p>      {product.price}
//           </div>

//       </div>
//     </div>

//     </>
//   );
// }

"use client";

import { Product } from "@/lib/types";
import { Bookmark} from 'lucide-react'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductTile({ product }: { product: Product }) {
  const router = useRouter();

  return (
//     <div
//   className="border-2 border-gray-200 rounded-xl w-[200px] h-[300px] bg-white cursor-pointer hover:shadow-lg transition-all duration-300"
//   onClick={() => router.push(`/product/${product.id}`)} // Navigate to product detail page
// >
//   {/* Product Image */}
//   <div className="overflow-hidden aspect-auto h-[150px] w-[180px]">
//     {product?.image_link ? (
//       <img
//         src={product.image_link} // Ensure the correct image field is used
//         alt={product?.name || "Product Image"} // Use either title or name with fallback
//         className="h-full w-full object-cover rounded-t-xl transition-all duration-300 hover:scale-110"
//       />
//     ) : (
//       <div className="h-full w-full bg-gray-200 text-center flex items-center justify-center">
//         No Image Available
//       </div>
//     )}
//   </div>

//   {/* Product Info */}
//   <div className="p-2">
//     {/* Product Title */}
//     <div className="items-center mt-2 text-sm">
//       <p className="flex flex-row justify-between text-sm font-medium">
//         {product?.heading 
//           ? (product.heading.length > 18 
//             ? `${product.heading.slice(0, 18)}...` 
//             : product.heading)
//           : 'No Title'} {/* Fallback to 'No Title' */}
//         <h6><Bookmark size={20} /></h6>
//       </p>
//     </div>

//     {/* Price */}
//     <div className="flex items-center mt-2 text-sm">
//       <span className="font-light">UGX</span>
//       <span className="ml-2 font-semibold">{product?.price || 'N/A'}</span> {/* Fallback to 'N/A' */}
//     </div>
//   </div>
// </div>

    <div
      className="border-2 border-gray-200 rounded-xl w-[200px] h-[300px] bg-white cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={() => router.push(`/product/${product.id}`)} // Navigate to product detail page
    >
      {/* Product Image */}
      <div className="overflow-hidden aspect-auto h-[150px] w-[180px]">
        <img
          src={product.image_link} // Ensure the correct image field is used
          alt={product.name} // Use either title or name
          className="h-full w-full object-cover rounded-t-xl transition-all duration-300 hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-2">
      

         {/* Product Title */}
         {/* <div className="items-center mt-2 text-sm">
           <p className="flex flex-row justify-between text-sm font-medium">
             {product.heading && product.heading.length > 18 
               ? `${product.heading.slice(0, 18)}...` 
               : product.heading || 'No Title'} {/* Fallback to 'No Title' if heading is undefined */}
             {/* <h6><Bookmark size={20} /></h6>
           </p>
         </div> */} 

         <div className="items-center mt-2 text-sm">
            <p className="flex flex-row justify-between text-sm font-medium">
              {/* {product.heading} */}
            {product?.heading && product.heading.length > 18 ? `${product.heading.slice(0, 18)}...` : product.heading || 'No Title'}
            <h6><Bookmark size={20}/></h6>
          </p>
         </div> 
        
        
        {/* Price */}
        <div className="flex items-center mt-2 text-sm">
          <span className="font-light">UGX</span>
          <span className="ml-2 font-semibold">{product.price}</span>
        </div>
      </div>
    </div>
  );
}
