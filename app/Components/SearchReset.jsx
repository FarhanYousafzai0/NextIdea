"use client"
import {  X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SearchReset = () => {

    const reset = () => {
        const form = document.querySelector('.search-form') 

        if(form) form.reset();
    }

    return (
        <button type="reset" onReset={reset}>
            <Link href="/" className="size-[50px] rounded-full bg-black  flex justify-center items-center hover:bg-gray-900 transition text-white">
                <X className="size-5" />
            </Link>
        </button>
    )
  
}

export default SearchReset

