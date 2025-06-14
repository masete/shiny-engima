import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { truncateText } from "@/utils/truncateText";
import Link from "next/link";
import Image from "next/image";
import SetQuantity from "@/components/Products/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps {
    item: Product;
}

export const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    const { handleRemoveProductFromCart, handleCartQtyIncrease } = useCart();

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 border-t-[1.5px] border-slate-200 py-4 items-center text-xs md:text-sm">
            
            {/* Image & Product Name */}
            <div className="flex flex-col md:flex-row col-span-2 items-start md:items-center gap-3 md:gap-4">
                <Link href={`/product/${item.id}`}>
                    <div className="relative w-[80px] h-[80px] md:w-[70px] md:aspect-square">
                        <Image src={item.image_link} alt={item.name} fill className="object-contain" />
                    </div>
                </Link>
                <div className="flex flex-col">
                    <Link href={`/product/${item.id}`} className="font-semibold text-gray-700">
                        {truncateText(item.heading, 30)}
                    </Link>
                    <Button 
                        variant="ghost" 
                        className="text-red-500 text-xs underline mt-1 w-fit"
                        onClick={() => handleRemoveProductFromCart(item)}
                    >
                        Remove
                    </Button>
                </div>
            </div>

            {/* Price (Hidden on small screens, appears in total section) */}
            <div className="hidden md:block text-center">{item.price}</div>

            {/* Quantity */}
            <div className="flex md:justify-center">
                <SetQuantity 
                    cartCounter={true} 
                    cartProduct={item} 
                    handleQtyIncrease={() => handleCartQtyIncrease(item)}
                    handleQtyDecrease={() => {}}
                />
            </div>

            {/* Total (Price * Quantity) */}
            <div className="font-semibold justify-self-end hidden md:block">
                {item.price * 
                1
                // item.quantity
                }
            </div>

            {/* Mobile View: Show Price & Total in stacked format */}
            <div className="flex md:hidden flex-col text-sm text-gray-700 mt-2">
                <span>Price: {item.price}</span>
                <span className="font-semibold">Total: 
                    {item.price * 
                    1
                    // item.quantity
                    }</span>
            </div>
        </div>
    );
};
