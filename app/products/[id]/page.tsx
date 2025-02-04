import QuantityBtn from '@/components/QuantityBtn'
import Link from 'next/link'
import React from 'react'

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {

  const productId = (await params).id

  const dataQ = await fetch('http://localhost:4000/products/' + productId)

  const productDetail: ProductDetail = await dataQ.json()

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="m-7">
          <img src={`/images/${productDetail.image}`} alt={productDetail.name} className="w-full h-auto rounded-2xl" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{productDetail.name}</h1>
          <p className="text-3xl mb-2">每件價格 : ${productDetail.price.toFixed(0)}</p>
          <p className="text-xl mt-7 mb-6">{productDetail.description}</p>
          <QuantityBtn productInfo={productDetail} />

          <div className='my-7'>
            <Link href={`/`} className='text-2xl bg-slate-100 px-10 py-2 rounded-lg text-slate-700'>返回產品列表</Link>
          </div>

        </div>
      </div>

    </>
  )
}
