import SetQuantity from "@/components/Products/SetQuantity";
import { Product } from "@/lib/types";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number;
    cartProducts: Product[] | null;
    handleAddProductToCart: (product: Product) => void;
    handleRemoveProductFromCart: (product: Product) => void;
    handleCartQtyIncrease: (product: Product) => void;
    handleClearCut: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props{
    [propName: string] : any
}

export const CartContextProvider =(props : Props)=>{
    const [cartTotalQty, SetCartTotalQty] = useState(10)
    const [cartProducts, setCartproduct] = useState<Product[] | null>(null)

    useEffect(()=>{
        const cartItems: any = localStorage.getItem('marketplacecartitems')
        const cProducts: Product[] | null = JSON.parse(cartItems)

        setCartproduct(cProducts)
    },[])

    const handleAddProductToCart = useCallback((product : Product)=>{
        setCartproduct( (prev) => {
            let updatedCart

            if(prev){
                updatedCart = [...prev, product]
            }
            else{
                updatedCart = [product]
            }

            toast.success("Product added to cart")
            localStorage.setItem('marketplacecartitems', JSON.stringify(updatedCart))
            return updatedCart
        })
    }, [])


    const handleRemoveProductFromCart = useCallback((
        product: Product
    )=>{
        if(cartProducts){
            const filteredProducts = cartProducts.filter
            ((item)=>{
                return item.id != product.id
            })

            setCartproduct(filteredProducts)

            toast.success("Product removed")
            localStorage.setItem('marketplacecartitems', JSON.stringify(filteredProducts))
            return filteredProducts
        }
    }, [cartProducts])

    const handleClearCut = useCallback(()=>{
        setCartproduct(null)
        SetCartTotalQty(0)
        // SetQuantity(null)
        toast.success("Cart Cleared")
        localStorage.setItem('marketplacecartitems', JSON.stringify([]))

    },[cartProducts])

    const handleCartQtyIncrease = useCallback((
        product: Product
    )=>{
        let updatedCart;

        if(product.quantity === 99){
            return toast.error("Oops! Maximum Reached")
        }

        if(cartProducts){
            updatedCart = [...cartProducts]

            const existingIndex = cartProducts.findIndex(
                (item)=> item.id === product.id)

            if(existingIndex > -1){
                updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity
            }

            setCartproduct(updatedCart)
            localStorage.setItem('marketplacecartitems', JSON.stringify(updatedCart))
        }
    }, [cartProducts])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleClearCut,
    }

    return <CartContext.Provider value={value} {...props}/>
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === null){
        throw new Error ("useCart must be used with in  a cartContextProvider")
    }

    return context;
};
