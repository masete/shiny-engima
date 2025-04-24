import { fetchCategoriesWithProducts } from "../../../actions/productsData";
import MarketList from "@/components/MarketList";
import { Category } from "@/lib/types";
import CategoryBar from "@/components/Products/CatMotionBar";

const Home = async () => {
  const categories = await fetchCategoriesWithProducts();

  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-100">
  
      <div className="w-full px-4 sm:px-6 lg:px-8 py-0 sm:py-2">
  
        <CategoryBar />
      </div>

      {/* Categories Content */}
      <div className="flex-grow w-full px-2 sm:px-2 lg:px-2">
        {categories.map((category: Category) => (
          <div key={category.id} className="w-full">
            <MarketList
              title={category.name}
              products={category.products}
              categoryId={category.id}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
