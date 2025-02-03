import React from 'react'
import Title from '@/components/Title'
import CheckoutItemList from '@/components/CheckoutItemList'

export default function Checkout() {
  
  return (
    <>
    <Title txt={`Checkout`}></Title>

    <CheckoutItemList />
    </>
  )
}
