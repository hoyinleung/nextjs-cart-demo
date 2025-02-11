"use client"

import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { useCartContext } from "@/context/CartContext"

export default function SignInDetector() {

  const { isSignedIn, user, isLoaded } = useUser();
  const { setCart } = useCartContext()

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        console.log("User signed in");
        setCart(user.publicMetadata.cart as any[])
      }
    }
  }, [isSignedIn]);

  return (
    <></>
  )
}