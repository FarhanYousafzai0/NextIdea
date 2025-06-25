'use client'

import {auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = async() => {



    // You need to fetch the session client-side since 'auth()' is a server-only function
  const session = await auth()



  return (
    <header className='px-5 py-5 bg-white shadow-sm'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={100} height={100} />
        </Link>

        <div className='flex items-center gap-4'>
          {session && session.user ? (
            <>
              <Link href='/startup/create'>
                <button>Create Startup</button>
              </Link>

              <button onClick={() => signOut()}>Logout</button>

              <Link href={`/profile/${session.user.id}`}>
                {session.user.name}
              </Link>
            </>
          ) : (
            <button
              onClick={async() => await signIn('github')}
              className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
            >
              Login with GitHub
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
