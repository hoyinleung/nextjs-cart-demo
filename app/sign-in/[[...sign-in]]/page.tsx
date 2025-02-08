import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='h-[70vh] flex justify-center items-center'>
      <SignIn />
    </div>
  )
}