"use client";

import Button from "@/components/Button";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { ItemContent } from "./ItemContent";

export const CartClient = () => {
    const { cartProducts, handleClearCut } = useCart();

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <div className="text-lg md:text-2xl font-semibold">Your Cart is Empty</div>
                <Link href={'/'} className="text-blue-600 flex items-center gap-1 mt-2 text-sm md:text-base">
                    <MdArrowBack />
                    <span>Start Shopping</span>
                </Link>
            </div>
        );
    }

    return (
        <div className="md:px-8 lg:px-16">
            {/* Title (Hidden on mobile) */}
            <div className="hidden md:grid grid-cols-5 text-xs gap-4 items-center pt-4 border-b pb-2">
                <div className="col-span-2 justify-self-start font-semibold">PRODUCT</div>
                <div className="justify-self-center font-semibold">PRICE</div>
                <div className="justify-self-center font-semibold">QUANTITY</div>
                <div className="justify-self-end font-semibold">TOTAL</div>
            </div>

            {/* Cart Items */}
            <div className="mt-4">
                {cartProducts.map((item) => (
                    <ItemContent key={item.id} item={item} />
                ))}
            </div>

            {/* Bottom Section */}
            <div className="border-t-[1.5px] border-slate-200 py-6 flex flex-col md:flex-row justify-between gap-6">
                
                {/* Clear Cart Button */}
                <div className="w-full md:w-[90px]">
                    <Button label="Clear Cart" small onClick={handleClearCut} />
                </div>

                {/* Checkout Details */}
                <div className="text-sm flex flex-col gap-2 items-start w-full md:w-auto">
                    <div className="flex justify-between w-full text-base font-semibold">
                        <span>Sub Total</span>
                        <span>1000/=</span>
                    </div>
                    
                    <p className="text-slate-500 text-xs md:text-sm">
                        Taxes and Shipping calculated at checkout
                    </p>

                    <Button label="CheckOut" onClick={() => {}} />

                    <Link href={'/'} className="text-blue-600 flex items-center gap-1 mt-2 text-sm md:text-base">
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartClient;
