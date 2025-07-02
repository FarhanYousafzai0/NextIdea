'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import MDEditor from '@uiw/react-md-editor';
import { Textarea } from '@/components/ui/textarea'




const page = () => {
  const [pitch, setPitch] = useState('');
const [error, setError] = useState('');


const isPending = false;
  return (
    <>
      <div className='w-full bg-pink-400 !min-h-[300px] pattern flex justify-center items-center flex-col py-10 px-6'>
        <h1 className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5 rounded-md'>
          Submit your startup
        </h1>
      </div>

      <form className='max-w-2xl mx-auto bg-white my-10 space-y-8 px-6'>

        {/* Title */}
        <div>
          <label htmlFor="title" className='font-bold text-[18px] text-black uppercase'>Title</label>
          <Input
            name='title'
            id='title'
            required
            placeholder='Enter your startup title'
            className='border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-5 placeholder:text-black-300'
          />

          {error.title && <p className='text-red-500 mt-2 ml-5'>{error.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className='font-bold text-[18px] text-black uppercase'>Description</label>
          <Textarea
            name='description'
            id='description'
            required
            placeholder='Describe your startup'
            className='border-[3px] border-black px-5 py-5 text-[16px] text-black font-semibold rounded-2xl mt-5 placeholder:text-black-300 resize-none'
          />
          {error.description && <p className='text-red-500 mt-2 ml-5'>{error.description}</p>}
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className='font-bold text-[18px] text-black uppercase'>Category</label>
          <Input
            name='category'
            id='category'
            required
            placeholder='e.g. AI, EdTech, Finance'
            className='border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-5 placeholder:text-black-300'
          />
          {error.category && <p className='text-red-500 mt-2 ml-5'>{error.category}</p>}
        </div>

        {/* Image */}
        <div>
          <label htmlFor="link" className='font-bold text-[18px] text-black uppercase'>Image</label>
          <Input
            type='url'
            name='link'
            id='link'
            required
            placeholder='Enter your startup link'
            className='border-[3px] border-black px-5 py-7 text-[16px] text-black font-semibold rounded-full mt-5 bg-white'
          />
          {error.link && <p className='text-red-500 mt-2 ml-5'>{error.link}</p>}
        </div>

        {/* Pitch */}
        <div data-color-mode="light">
          <label htmlFor="pitch" className='font-bold text-[18px] text-black uppercase'>Pitch</label>
          <MDEditor
            value={pitch}
            onChange={setPitch}
           preview='edit'
           textareaProps={{
            placeholder:"Briefly describe your ptich,and what problem it solves",
           }}
           id='pitch'
           height={300}
           previewOptions={{
            disallowedElements:['style']
           }}
           style={{borderRadius:20,overflow:'hidden',border:'3px solid black' }}
          />
          {error.pitch && <p className='text-red-500 mt-2 ml-5'>{error.pitch}</p>}
        </div>


<button disabled={isPending} className='bg-pink-400 border-[4px] cursor-pointer transition-transform hover:scale-95 duration-300 border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px] text-white'>{isPending ? 'Submitting...' : 'Submit'}</button>
      </form>
    </>
  )
}

export default page
