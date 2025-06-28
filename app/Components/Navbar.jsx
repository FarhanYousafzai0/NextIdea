'use client'

import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import GradientText from '../GradientText/GradientText'

const Navbar = () => {
  const { isSignedIn, user } = useUser()

  return (
    <header className='h-[70px] p-4 bg-white shadow-sm '>
      <div className='flex items-center justify-between'>
        <Link href='/'>
      <Image src='/logo.png' alt='logo' width={200} height={150} />
        </Link>

        <div className='flex items-center gap-4'>
          {isSignedIn ? (
            <>
              <Link href='/startup/create'>
               <GradientText className='text-2xl'>Create Startup</GradientText>   
              </Link>

              <UserButton showName={true} />

              
            </>
          ) : (
            <SignInButton mode='modal'>
              <button className=' text-white px-4 py-2 rounded-md cursor-pointer'>
                Login with Clerk
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
