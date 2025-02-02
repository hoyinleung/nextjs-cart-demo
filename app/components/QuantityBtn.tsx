"use client"

import { useState } from "react"

type Props = {
  productInfo: ProductDetail
}

export default function QuantityBtn({ productInfo }: Props) {
  console.log("🚀 ~ QuantityBtn ~ productInfo:", productInfo)

  /* const {cartItems, setCartItems} = useContext(CartContext)

  let productIndexInCart = cartItems.findIndex((element)=>{
      return element.id === productInfo.id
  }) */

  const [numInCart, setNumInCart] = useState(
    1
  )
  /* let [numInCart,setNumInCart] = useState(
      (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
  ) */

  const handleAdd = () => {

    /* if(productIndexInCart===-1)
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
        newCartArray[productIndexInCart].quantity++
        setCartItems(newCartArray)
    } */

    setNumInCart(numInCart + 1)
  }

  const handleSubtract = () => {

    /* if(cartItems[productIndexInCart].quantity===1)
    {
        //購在物車中只剩一件的話，remove object
        let newCartArray = [...cartItems]
        newCartArray.splice(productIndexInCart,1)
        setCartItems(newCartArray)
    }
    else
    {
        //只減個quantity
        let newCartArray = [...cartItems]
        newCartArray[productIndexInCart].quantity--
        setCartItems(newCartArray)
    } */

    setNumInCart(numInCart - 1)
  }

  return (
    <div className="text-center py-3">
      {
        (numInCart === 0) ?
          <div className="" onClick={handleAdd}>
            <span className="addToCart">加入購物車</span>
          </div> :
          <div>
            <span className="addMinusBtn" onClick={handleSubtract}>-</span>
            <span className="text-xl font-bold px-2">{numInCart}</span>
            <span className="addMinusBtn" onClick={handleAdd}>+</span>
          </div>
      }
    </div>
  )
}