import { getApiResponse } from "@/lib/products_requests"

import { Category } from '@/lib/types';

// Fetch all categories
export const fetchCategories = async (): Promise<Category[]> => {
  const data = await getApiResponse('/public/get-product-service-listing-categories');
  return data;
};

// Fetch products by category
export const fetchProductsByCategory = async (categoryId: number) => {
  const data = await getApiResponse('/public/get-service-or-product-by-category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category_id: categoryId }),
  });

  return data;
};

// Fetch categories with their respective products
// export const fetchCategoriesWithProducts = async () => {
//   const categories = await fetchCategories();
//   const categoriesWithProducts = await Promise.all(
//     categories.map(async (category: Category) => {
//       const products = await fetchProductsByCategory(category.id);
//       return {
//         ...category,
//         products,
//       };
//     })
//   );
//   // console.log("categoriesWithProducts:", categoriesWithProducts); 
//   return categoriesWithProducts;
  
// };

export const fetchCategoriesWithProducts = async () => {
  try {
    const categories = await fetchCategories();

    const categoriesWithProducts = await Promise.all(
      categories.map(async (category: Category) => {
        const products = await fetchProductsByCategory(category.id);
        return { ...category, products };
      })
    );

    return categoriesWithProducts;
  } catch (err) {
    console.error("Error in fetchCategoriesWithProducts:", err);
    return []; // Fallback
  }
};

