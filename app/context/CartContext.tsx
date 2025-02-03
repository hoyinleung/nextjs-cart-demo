"use client"

import { createContext, useContext, useState } from "react";

type CartContextType = {
  cart: CartItems[] | [],
  add1ToCart: (product: ProductDetail) => void
};

const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({ children }: { children: React.ReactNode }) {

  const [cart, setCart] = useState<CartItems[] | []>([])
  const add1ToCart = (product: ProductDetail) => {

    const productExistsInCart = cart.some((cartProduct) => cartProduct.id === product.id);

    if (!productExistsInCart) {
      setCart(
        (prev) => {
          return [
            ...prev,
            { ...product, quantity: 1 }
          ]
        }
      );
    }
    else {
      setCart(
        cart.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + 1
            }
          }
          return cartProduct;
        })
      );
    }
  };

  return (
    <CartContext.Provider value={{cart, add1ToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a SharedProvider");
  }
  return context;
};