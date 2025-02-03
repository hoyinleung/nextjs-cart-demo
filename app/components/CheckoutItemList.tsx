"use client"

import React from 'react'
import { useCartContext } from '@/context/CartContext'
import QuantityBtn from '@/components/QuantityBtn'
import Link from 'next/link'

export default function CheckoutItemList() {

  const { cart } = useCartContext()

  return (
    <>
      {
        (cart.length > 0) ? (
          <div className='grid grid-cols-3 gap-3'>

            <div className="col-span-1 text-xl rounded-lg my-3 flex justify-center">
              產品名稱和單價
            </div>
            <div className="col-span-1 text-xl rounded-lg my-3 flex justify-center">
              購買數量
            </div>
            <div className="col-span-1 text-xl rounded-lg my-3 flex justify-center">
              合共
            </div>
            {
              cart.map(product => (
                <React.Fragment key={product.id}>
                  <div className="col-span-1  rounded-lg">
                    <Link target='_blank' href={'/products/' + product.id}>
                      <img src={`/images/${product.image}`} className='w-[150px] mx-auto' alt={product.name} />
                    </Link>
                    <div className='mb-2 text-xl text-center block font-bold'>{product.name} ${product.price}/件</div>
                  </div>

                  <div className="col-span-1  rounded-lg flex items-center justify-center">
                    <QuantityBtn productInfo={product} />
                  </div>

                  <div className="col-span-1  rounded-lg text-2xl font-bold flex items-center justify-center">
                    <p>${(product.price * product.quantity).toFixed(0)}</p>
                  </div>

                  <div className="col-span-3 border-x-2"></div>
                </React.Fragment>
              ))
            }

            <div className="col-span-1 rounded-lg my-3 flex justify-center">

            </div>

            <div className="col-span-1 rounded-lg my-3 flex justify-center">

            </div>

            <div className="col-span-1  rounded-lg flex items-center justify-center">

              <div className='text-3xl font-bold mb-4'>總合共
                ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(0)}
              </div>

              <button className="bg-green-600 text-xl w-[50%] py-3 text-slate-100 rounded-lg px-4 mx-auto">付款</button>
            </div>

          </div>
        ) : (
          <p className='text-center text-2xl py-20'>購物車是空的，請到<Link href={`/`}>產品頁面</Link>加入商品</p>
        )
      }
    </>
  )
}
