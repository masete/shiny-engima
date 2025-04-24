"use client";

import { useGetJobsQuery } from "@/state/api"; 
import JobsByCategory from "@/components/jobs/jobByCategory";

const Home = () => {
  const { data: categories, isLoading, isError } = useGetJobsQuery();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      {isLoading && <p className="text-center mt-10">Loading jobs...</p>}
      {isError && <p className="text-center text-red-500 mt-10">Failed to load jobs.</p>}

      <div className="flex flex-col gap-12 mt-8">
        {categories?.map((category) => (
          <JobsByCategory key={category.category_id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;

