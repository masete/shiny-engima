"use client";

import Link from "next/link";
import React, { useState } from "react";

export const Selection = () => {
  const [selected, setSelected] = useState("products");

  return (
    <div className="flex items-center justify-center gap-4 text-black">
      <Link href="/">
        <div
          className={`cursor-pointer px-3 py-1 rounded-md text-center whitespace-nowrap ${
            selected === "products"
              ? "text-blue-500 font-medium"
              : "text-black hover:text-blue-500"
          }`}
          onClick={() => setSelected("products")}
        >
          <h6 className="text-xl font-bold sm:text-base">Products & Services</h6>
        </div>
      </Link>
      <span className="hidden sm:block text-gray-400">|</span> {/* Divider for better separation */}
      <Link href="/jobs">
        <div
          className={`cursor-pointer px-3 py-1 rounded-md text-center whitespace-nowrap ${
            selected === "jobs"
              ? "text-blue-500 font-medium"
              : "text-black hover:text-blue-500"
          }`}
          onClick={() => setSelected("jobs")}
        >
          <h6 className="text-xl font-bold sm:text-base">Available Jobs</h6>
        </div>
      </Link>
    </div>
  );
};

