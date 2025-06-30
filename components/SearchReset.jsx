"use client"
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const SearchReset = () => {
  const router = useRouter();

  const reset = () => {
    // Reset the form
    const form = document.querySelector('.search-form');
    if (form) form.reset();

   
    router.replace('/');
  };

  return (
    <button
      type="button"
      onClick={reset}
      className="size-[50px] rounded-full cursor-pointer bg-black flex justify-center items-center hover:bg-gray-900 transition text-white"
    >
      <X className="size-5" />
    </button>
  );
};

export default SearchReset;
