"use client";

import React, { useState, useEffect } from "react";
import Banner from "../Products/Bar";

const JobDetails = ({ id }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Ensure `id` is available

    const fetchJobDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/get-job-listing-by-id`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: parseInt(id) }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching job details: ${response.statusText}`);
        }

        const data = await response.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading job details...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">

       {/* <div className='mx-6 my-4'> */}
             <Banner 
               title="Back" 
               showAllText="" 
               bgColor="#FFFFFF" 
               textColor="#000" 
               borderColor="#FFFFFF" 
               showChevron={false}
             />
        {/* </div> */}

      <h1 className="text-2xl font-bold mb-6">{job.heading}</h1>
      <img
        src={job.image_link}
        alt={job.heading}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-4"><strong>Details:</strong> {job.details}</p>
      <p className="text-lg mb-4"><strong>Price:</strong> UGX {job.price.toLocaleString()}</p>
      <p className="text-lg mb-4"><strong>Company:</strong> {job.name}</p>
      <p className="text-lg mb-4"><strong>Available Date:</strong> {job.available_date}</p>
      <p className="text-lg mb-4"><strong>Date Posted:</strong> {job.date_posted}</p>
      <button
        onClick={() => window.history.back()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default JobDetails;

