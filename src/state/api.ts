import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Product, Job, JobListing,JobCategory } from '@/lib/types';

const token = typeof window !== "undefined" ? sessionStorage.getItem("access_token") : null;

export interface NewProduct {
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}


export interface ProductCategories {
  name: string;
  details: string;
  type: string;
  id: number;
}

export interface User {
  userId: string;
  name: string;
  email: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Products", "Users","Jobs"],
  endpoints: (build) => ({
    getProductsCategories: build.query<Category[], string | void>({
      query: (categoryId) => ({
        url: "/public/get-product-service-listing-categories",
        params: { id: categoryId },
        // params: search ? { search } : {},
      }),
      providesTags: ["Products"],
    }),
    // getProductsCategoriesById: build.query<Category[], string | void>({
    //   query: (categoryId) => ({
    //     url: "/public/get-service-or-product-by-category",
    //     params: { id: categoryId },
        
    //   }),
    //   providesTags: ["Products"],
    // }),
    getJobs: build.query<JobCategory[], string | void>({
      query: (search) => ({
        url: "/public/get-job-listing",
        params: search ? { search } : {},
      }),
      providesTags: ["Jobs"],
    }),
    createProduct: build.mutation<any, FormData>({
      query: (formData) => {
        return {
          url: "/business-configuration/create-service-or-product",
          method: "POST",
          body: formData,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      invalidatesTags: ["Products"],
    }),
    

    getUsers: build.query<User[], void>({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    getProducts: build.query<Product[], string | void>({
      query: (search) => ({
        url: "/products",
        params: search ? { search } : {},
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useGetUsersQuery,
  useGetJobsQuery,
  useGetProductsCategoriesQuery,
  // useGetProductsCategoriesByIdQuery,
} = api;