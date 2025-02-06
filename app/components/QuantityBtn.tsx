"use client"

import { useState } from "react"
import { useCartContext } from "@/context/CartContext"

type Props = {
  productInfo: ProductDetail
}

export default function QuantityBtn({ productInfo }: Props) {

  const { cart, add1ToCart, minus1ToCart } = useCartContext()


  const indexInCart = cart.findIndex((element) => {
    return element.id === productInfo.id
  })

  const [numInCart, setNumInCart] = useState(
    (indexInCart === -1) ? 0 : cart[indexInCart].quantity
  )

  const handleAdd = () => {
    add1ToCart(productInfo)
    setNumInCart(prev => prev + 1)
  }

  const handleSubtract = () => {
    minus1ToCart(productInfo)
    setNumInCart(prev => prev - 1)
    console.log("🚀 ~ QuantityBtn ~ cart:", cart)
  }

  return (
    <span className="min-w-[370px] text-center">
      {
        (numInCart === 0) ?

            <span className="addToCart" onClick={handleAdd}>加入購物車</span>
           :
           <span className="addToCart">
            <span className="addMinusBtn" onClick={handleSubtract}>-</span>
            <span className="text-xl font-bold px-2"> 購買數 : {numInCart}
            </span>
            <span className="addMinusBtn" onClick={handleAdd}>+</span>
            </span>
      }
    </span>
  )
}