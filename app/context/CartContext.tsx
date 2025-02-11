"use client"

import { createContext, useContext, useState } from "react";
import { updateCartToClerkPublicMetaData } from "@/actions/cart";

type CartContextType = {
  cart: CartItems[] | [],
  add1ToCart: (product: ProductDetail) => void
  minus1ToCart: (product: ProductDetail) => void
  setCart: React.Dispatch<React.SetStateAction<CartItems[] | []>>
};

const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({ children }: { children: React.ReactNode }) {

  const [cart, setCart] = useState<CartItems[] | []>([])
  const updateCart = (newCart: CartItems[]) => {
    setCart(newCart);
    updateCartToClerkPublicMetaData(newCart); // Sync with Clerk metadata
  };

  const add1ToCart = (product: ProductDetail) => {
    updateCart(
      cart.some((item) => item.id === product.id)
        ? cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
        : [...cart, { ...product, quantity: 1 }]
    );
  };

  const minus1ToCart = (product: ProductDetail) => {
    updateCart(
      cart
        .map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{cart, add1ToCart,minus1ToCart,setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a SharedProvider");
  }
  return context;
};