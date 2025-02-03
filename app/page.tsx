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

      <Title txt="NextJS Cart Demo" className="mt-0" />

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
