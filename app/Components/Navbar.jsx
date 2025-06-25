'use client'

import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const { isSignedIn, user } = useUser()

  return (
    <header className='h-[70px] p-4 bg-white shadow-sm '>
      <nav className='flex items-center justify-between'>
        <Link href='/'>
       <span className='text-[1.3rem] font-bold uppercase'>Next<span className='text-purple-500'>Idea</span></span>
        </Link>

        <div className='flex items-center gap-4'>
          {isSignedIn ? (
            <>
              <Link href='/startup/create'>
                <button className='bg-purple-500 text-white px-4 py-2 rounded-md cursor-pointer md:flex hidden'>Create Startup</button>
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
      </nav>
    </header>
  )
}

export default Navbar
