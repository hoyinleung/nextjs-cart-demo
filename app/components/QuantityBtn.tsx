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

    /* if(indexInCart===-1)
    {
        //購物車本身沒有，在cartItems array中加個新element (object)
        setCartItems(
            [{
                id : productInfo.id,
                name:productInfo.name,
                image:productInfo.image,
                price:productInfo.price,
                description:productInfo.description,
                quantity:1
            },
            ...cartItems]
        )
    }
    else
    {
        //購物車有該產品，只加個quantity
        let newCartArray = [...cartItems]
        newCartArray[indexInCart].quantity++
        setCartItems(newCartArray)
    } */

    //setNumInCart(numInCart + 1)
    add1ToCart(productInfo)
    setNumInCart(prev => prev + 1)
  }

  const handleSubtract = () => {

    /* if(cartItems[indexInCart].quantity===1)
    {
        //購在物車中只剩一件的話，remove object
        let newCartArray = [...cartItems]
        newCartArray.splice(indexInCart,1)
        setCartItems(newCartArray)
    }
    else
    {
        //只減個quantity
        let newCartArray = [...cartItems]
        newCartArray[indexInCart].quantity--
        setCartItems(newCartArray)
    } */
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