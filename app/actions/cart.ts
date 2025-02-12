"use server"

import { handleError } from '@/lib/util'
import { currentUser, clerkClient } from '@clerk/nextjs/server'

export async function updateCartToClerkPublicMetaData(cart: any[]) {
  try {
    const user = await currentUser()

    if(!user) return false
    
    const client = await clerkClient()
    
    const res = await client.users.updateUserMetadata(user.id, {
      publicMetadata: {
        cart:cart
      },
    })
    
    if (res) return true
    
    throw new Error("Cannot update Clerk metadata")
    
  } catch (error) {
    handleError(error);
  }
}