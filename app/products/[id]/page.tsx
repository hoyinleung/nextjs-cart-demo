import React from 'react'

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {

  const productId = (await params).id

  return (
    <div>ProductDetail {productId}</div>
  )
}
