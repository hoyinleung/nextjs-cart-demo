/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Title from "@/components/Title";
import QuantityBtn from "@/components/QuantityBtn";

export default async function Home() {

  const dataQ = await fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
  if (!dataQ.ok) throw Error('Failed to fetch posts')

  const productData: ProductDetail[] = await dataQ.json()

  return (
    <>
      <Title txt="NextJS Cart" />

      <div className="flexContainer">
        {
          productData.map(product => (
            <React.Fragment key={product.id}>

              <div className="flexItem bg-slate-200 rounded-lg">
                <Link href={'/product/' + product.id}>
                  <img src={`/images/${product.image}`} alt={product.name} />
                </Link>

                <div className="productName">
                  {product.name}  -  {product.price}元/件
                </div>

                <QuantityBtn productInfo={product} />
              </div>

            </React.Fragment>
          ))
        }
      </div>
    </>
  )
}
