
// import { useState } from 'react';
// import { useCreateProductMutation, useGetProductsCategoriesQuery } from '@/state/api';

// interface CreateProductModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const CreateProductModal: React.FC<CreateProductModalProps> = ({ isOpen, onClose }) => {
//   const [productName, setProductName] = useState('');
//   const [productPrice, setProductPrice] = useState('');
//   const [productCategory, setProductCategory] = useState('');
//   const [productDetails, setProductDetails] = useState('');
//   const [images, setImages] = useState<File[]>([]);

//   const [createProduct, { isLoading }] = useCreateProductMutation();
//   const { data: categories = [], isLoading: categoriesLoading } = useGetProductsCategoriesQuery();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (images.length === 0) {
//       alert('Please upload at least one image.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', productName);
//     formData.append('price', productPrice);
//     formData.append('category', productCategory);
//     formData.append('details', productDetails);
//     images.forEach((img) => formData.append('images', img));

//     try {
//       await createProduct(formData).unwrap();

//       // Clear form
//       setProductName('');
//       setProductPrice('');
//       setProductCategory('');
//       setProductDetails('');
//       setImages([]);

//       onClose();
//     } catch (error) {
//       console.error('Error creating product:', error);
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const updatedImages = [...images];
//       updatedImages[index] = file;
//       setImages(updatedImages);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto p-4">
//       <div className="bg-white p-6 shadow-lg w-full max-w-2xl">
//         <div className="flex items-center justify-between h-10 px-2 bg-blue-900 rounded-t-md">
//           <h2 className="text-sm text-white font-bold">Add product to your portfolio</h2>
//           <button
//             type="button"
//             onClick={onClose}
//             className="px-2 text-sm text-white rounded-md hover:bg-red-600"
//           >
//             X
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="mt-4 space-y-4">
//           <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700">Product Name</label>
//               <input
//                 type="text"
//                 value={productName}
//                 onChange={(e) => setProductName(e.target.value)}
//                 className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>

//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700">Price</label>
//               <input
//                 type="number"
//                 value={productPrice}
//                 onChange={(e) => setProductPrice(e.target.value)}
//                 className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700">Product Category</label>
//               <select
//                 value={productCategory}
//                 onChange={(e) => setProductCategory(e.target.value)}
//                 className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               >
//                 <option value="" disabled>
//                   {categoriesLoading ? 'Loading categories...' : 'Select a category'}
//                 </option>
//                 {categories.map((category) => (
//                   <option key={category.id} value={category.id}>
//                     {category.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700">Product Details</label>
//               <input
//                 type="text"
//                 value={productDetails}
//                 onChange={(e) => setProductDetails(e.target.value)}
//                 className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>
//           </div>

//           {/* Image Upload Section */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Images</label>
//             <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-2">
//               {[0, 1, 2].map((index) => (
//                 <div className="flex-1" key={index}>
//                   <label className="block text-xs text-gray-700">
//                     {`Image ${index + 1} ${index === 0 ? '(Required)' : '(Optional)'}`}
//                   </label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, index)}
//                     className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                     required={index === 0}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="px-4 py-1 bg-blue-900 text-white hover:bg-[#4BB3FD] md:px-6 md:py-2"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Submitting...' : 'SUBMIT'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateProductModal;

'use client';

import { useState, useEffect } from 'react';
import { useGetProductsCategoriesQuery } from '@/state/api';

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProductModal: React.FC<CreateProductModalProps> = ({ isOpen, onClose }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: categories = [], isLoading: categoriesLoading } = useGetProductsCategoriesQuery();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = sessionStorage.getItem("access_token");
    if (!token) {
      alert("You must be logged in to submit a product.");
      return;
    }

    if (!images[0]) {
      alert("Please upload at least one image.");
      return;
    }

    const formData = new FormData();
    formData.append("heading", productName);
    formData.append("details", productDetails);
    formData.append("price", productPrice);
    formData.append("date_posted", new Date().toISOString().split("T")[0]);
    formData.append("available_date", new Date().toISOString().split("T")[0]);
    formData.append("status", "PUBLISHED");
    formData.append("owner_id", "0"); // TODO: Replace with actual user ID if available
    formData.append("product_service_category_id", productCategory);
    formData.append("image", images[0]); // Only the first image is required

    try {
      setIsSubmitting(true);

      const res = await fetch(
        "https://watotomarketplace.com/market-place/business-configuration/create-service-or-product",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || "Failed to create product");
      }

      alert("Product created successfully!");

      // Clear form
      setProductName('');
      setProductPrice('');
      setProductCategory('');
      setProductDetails('');
      setImages([]);
      onClose();
    } catch (error: any) {
      console.error("Submission error:", error);
      alert(error.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = file;
      setImages(updatedImages);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto p-4">
      <div className="bg-white p-6 shadow-lg w-full max-w-2xl rounded-md">
        <div className="flex items-center justify-between h-10 px-2 bg-blue-900 rounded-t-md">
          <h2 className="text-sm text-white font-bold">Add product to your portfolio</h2>
          <button
            type="button"
            onClick={onClose}
            className="px-2 text-sm text-white rounded-md hover:bg-red-600"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Product Category</label>
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm"
                required
              >
                <option value="" disabled>
                  {categoriesLoading ? "Loading categories..." : "Select a category"}
                </option>
                {categories.map((category: any) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Product Details</label>
              <input
                type="text"
                value={productDetails}
                onChange={(e) => setProductDetails(e.target.value)}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Images</label>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-2">
              {[0, 1, 2].map((index) => (
                <div className="flex-1" key={index}>
                  <label className="block text-xs text-gray-700">
                    {`Image ${index + 1} ${index === 0 ? '(Required)' : '(Optional)'}`}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, index)}
                    className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm"
                    required={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
