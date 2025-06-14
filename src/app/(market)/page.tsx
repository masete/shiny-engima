import { fetchCategoriesWithProducts } from "../../../actions/productsData";
import MarketList from "@/components/MarketList";
import { Category } from "@/lib/types";

// export const dynamic = "force-dynamic"; // <-- ADD THIS

const Home = async () => {
  const categories = await fetchCategoriesWithProducts();

  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-100">

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
