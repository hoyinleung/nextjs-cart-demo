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
        console.log("User signed in",user);

        if(user){
          //避免Clerk過來的是Undefined
          const newValue = user.publicMetadata?.cart as any[] || [];
          setCart(newValue)
        }
      }
    }
  }, [isSignedIn]);

  return (
    <></>
  )
}