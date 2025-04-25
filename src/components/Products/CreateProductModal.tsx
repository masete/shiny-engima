import { useState } from 'react';
import { useCreateProductMutation, useGetProductsCategoriesQuery } from '@/state/api';

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

  const [createProduct, { isLoading }] = useCreateProductMutation();
  const { data: categories = [], isLoading: categoriesLoading } = useGetProductsCategoriesQuery();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (images.length === 0) {
      alert('Please upload at least one image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('price', productPrice);
    formData.append('category', productCategory);
    formData.append('details', productDetails);
    images.forEach((img) => formData.append('images', img));

    try {
      await createProduct(formData).unwrap();
      onClose();
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Something went wrong. Please try again.');
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 shadow-lg w-2/3">
        <div className="flex items-center justify-between h-8 px-2 bg-blue-900">
          <h2 className="text-xs text-white font-bold">Add product to your portfolio</h2>
          <button
            type="button"
            onClick={onClose}
            className="px-2 text-xs text-white rounded-md hover:bg-red-600"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Product Category</label>
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="" disabled>
                  {categoriesLoading ? 'Loading categories...' : 'Select a category'}
                </option>
                {categories.map((category) => (
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
                className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          {/* Image Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Images</label>
            <div className="flex space-x-4 mt-1">
              {[0, 1, 2].map((index) => (
                <div className="flex-1" key={index}>
                  <label className="block text-xs text-gray-700">
                    {`Image ${index + 1} ${index === 0 ? '(Required)' : '(Optional)'}`}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, index)}
                    className="mt-1 block w-full px-3 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-[#4BB3FD]"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;

