"use client";

import { Job } from "@/lib/types";
import { Bookmark} from 'lucide-react'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductTile({ job }: { job: Job }) {
  const router = useRouter();

  return (
    <div
      className="border-2 border-gray-200 rounded-xl w-[200px] h-[300px] bg-white cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={() => router.push(`/product/${job.id}`)} // Navigate to product detail page
    >
      {/* Product Image */}
      <div className="overflow-hidden aspect-auto h-[150px] w-[180px]">
        <img
          src={job.image_link} // Ensure the correct image field is used
          alt={job.name} // Use either title or name
          className="h-full w-full object-cover rounded-t-xl transition-all duration-300 hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-2">

         <div className="items-center mt-2 text-sm">
            <p className="flex flex-row justify-between text-sm font-medium">
              {/* {product.heading} */}
            {job?.name && job.name.length > 18 ? `${job.name.slice(0, 18)}...` : job.name || 'No Title'}
            <h6><Bookmark size={20}/></h6>
          </p>
         </div> 
        
        
        {/* Price */}
        <div className="flex items-center mt-2 text-sm">
          <span className="font-light">UGX</span>
          {/*<span className="ml-2 font-semibold">{job.salary}</span>*/}
        </div>
      </div>
    </div>
  );
}
