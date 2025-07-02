'use client'

import { SignInButton, SignOutButton, UserButton, useUser, } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import GradientText from '../app/GradientText/GradientText'

const Navbar = () => {
  const { isSignedIn, user } = useUser()

  return (
    <header className='h-[70px] p-4 bg-white shadow-sm '>
      <div className='flex items-center justify-between'>
        <Link href='/'>
        <span className='text-[1.3rem] font-bold uppercase'>Next<span className='text-pink-500'>Idea</span></span>
        </Link>

        <div className='flex items-center gap-4'>
          {isSignedIn ? (
            <>
              <Link href='/startup/create'>
               <GradientText className='text-1xl hidden md:block'>Create Startup</GradientText>   
              </Link>

              <UserButton showName={true} />

              
            </>
          ) : (
            <SignInButton mode='modal'>
              <button className=' text-black px-4 py-2 rounded-md cursor-pointer'>
                Login 
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
