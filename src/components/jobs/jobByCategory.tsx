"use client";

import React from "react";
import Link from "next/link";
import { JobCategory } from "@/lib/types";
import { Bookmark } from 'lucide-react'; // or your preferred icon library

type JobsByCategoryProps = {
  category: JobCategory;
};

const JobsByCategory: React.FC<JobsByCategoryProps> = ({ category }) => {
  return (
    <div className="w-full mb-10">
      <h2 className="text-2xl font-semibold mb-2">{category.category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {category.job_listing_list.map((job) => (
          <>
          
           <Link
            href={`/jobs/${job.id}`}
            key={job.id}
            className="bg-white shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow"
          >
            <p className="font-semibold mt-4"> {job.heading} </p>
            <img
              src={job.image_link}
              alt={job.heading}
              className="h-40 w-full object-cover rounded-t-md" />

            <p className="text-gray-600 text-sm my-2">{job.details}</p>
            <p className="text-sm">
              <strong>Company:</strong> {job.name ?? "N/A"}
            </p>
            <p className="text-sm">
              <strong>Exp Salary:</strong> UGX {job.price.toLocaleString()}
            </p>
            <p className="text-sm">
              <strong>Valid Till:</strong> {job.available_date}
            </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              Apply
            </div><span className="hidden sm:block text-black text-sm">|</span>
            <div className="items-center">
              <Bookmark className="w-5 h-5 text-gray-700" />
            </div>
        </div>
          </Link></>
        ))}
       
      </div>
    </div>
  );
};

export default JobsByCategory;
