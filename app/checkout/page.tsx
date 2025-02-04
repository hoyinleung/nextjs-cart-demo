import React from 'react'
import Title from '@/components/Title'
import CheckoutItemList from '@/components/CheckoutItemList'

export default function Checkout() {
  
  return (
    <>
    <Title txt={`💲結帳`}></Title>

    <CheckoutItemList />
    </>
  )
}
