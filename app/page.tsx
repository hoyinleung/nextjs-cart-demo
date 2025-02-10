/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Title from "@/components/Title";
import QuantityBtn from "@/components/QuantityBtn";
import {getAll} from '@/actions/products'

export default async function Home() {

  /* const dataQ = await fetch('http://localhost:4000/products')
  if (!dataQ.ok) throw Error('Failed to fetch posts')

  const productData: ProductDetail[] = await dataQ.json() */
  const productData: ProductDetail[] = await getAll()

  return (
    <>

      <Title txt="NextJS水果店" className="mt-0" />

      <div className="flexContainer">
        {
          productData.map(product => (
            <React.Fragment key={product.id}>

              <div className="flexItem bg-slate-200 rounded-lg">
                <Link href={'/products/' + product.id}>
                  <img src={`/images/${product.image}`} alt={product.name} />
                </Link>

                <div className="productName">
                  {product.name}  -  {product.price}元/件
                </div>
                
                <div className="text-center mb-4">
                  <QuantityBtn productInfo={product} />
                </div>
              </div>

            </React.Fragment>
          ))
        }
      </div>
    </>
  )
}
