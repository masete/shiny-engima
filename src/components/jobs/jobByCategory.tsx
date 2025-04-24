"use client";

import React from "react";
import Link from "next/link";
import { JobCategory } from "@/lib/types";

type JobsByCategoryProps = {
  category: JobCategory;
};

const JobsByCategory: React.FC<JobsByCategoryProps> = ({ category }) => {
  return (
    <div className="w-full mb-12">
      <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {category.job_listing_list.map((job) => (
          <Link
            href={`/jobs/${job.id}`}
            key={job.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={job.image_link}
              alt={job.heading}
              className="h-40 w-full object-cover rounded-t-md"
            />
            <h3 className="text-lg font-semibold mt-4">{job.heading}</h3>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobsByCategory;
