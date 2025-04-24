"use client";

import { useRouter } from "next/navigation";
// import ProductButton from "../../components/CommonListings/ProductButtons/page";
// import ProductList from "../ProductList";
import ProductTile from "../../components/CommonListings/ProductTile/page";
import { useEffect } from "react";
// import { Description } from "@mui/icons-material";
import { Product } from "@/lib/types";
// import ProductTile from "./ProductTile/page";
// import Notification from "../Notification";

//  
// const DummyData = {
//     id: 152673278327832,
//     name: "Mens T shirts",
//     Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     price: 97,
//     category: "Men",
//     deliveryInfo: "Free Delivery",
//     sizes: [
//         {
//             id:"s",
//             label: "S",
//         }
//     ],
//     onSale: "yes",
//     priceDrop: 15,
//     imageUrl: "https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_1280.jpg",
    // createdAt: 2024-07-22 14:28:33,
    // updatedAt: 2024-07-22 14:28:33,
// }
interface Props {
  title: string,
  products: Product[],
}


export default function CommonListing({ products }: Props) {
  // const router = useRouter();

  // useEffect(() => {
  //   router.refresh();
  // }, []);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            
        
                {products.map((product)=>(
                <ProductTile key={product.id} product={product}/>))}
                   {/* <article className="relative flex flex-col overflow-hidden border cursor-pointer" key={product.id}> */}
                        
                     
                
            {/* // : null */}
        
          
            {/* <ProductList/> */}
          {/* {data && data.length
            ? data.map((item) => (
                <article
                  className="relative flex flex-col overflow-hidden border cursor-pointer"
                  key={item._id}
                >
                  <ProductTile item={item} />
                  <ProductButton item={item} />
                </article>
              ))
            : null} */}
        </div>
      </div>
      {/* <Notification/> */}
    </section>
  );
}